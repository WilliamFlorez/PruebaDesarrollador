import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { getAllUsers , findUserByCredentials} from "../api/panzofi.api"; "../api/panzofi.api"

import { login } from "../api/task.api";


export function Login(){

    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

                
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
                    async function loadTasks(){
                        const res = await getAllUsers();
                    {/* console.log(res.data);*/}
                    setTasks(res.data);
                    }
                    loadTasks();
            }, []);



            const onSubmit = handleSubmit(async (data) => {
                try {
                    // Buscar el usuario con las credenciales proporcionadas
                    const user = tasks.find(
                        (task) => task.nombre === data.nombre && task.password === data.password
                    );
            
                    if (user) {
                        // Si el usuario es encontrado, redirigir
                        navigate(`/User/${user.id}`);
                    } else {
                        // Si no hay coincidencias, mostrar un error
                        alert("Nombre de usuario o contraseña incorrectos");
                    }
                } catch (error) {
                    console.error("Error al iniciar sesión:", error);
                }
            });


    return(
                    <>
            <div>Login</div>

                <form onSubmit={onSubmit}>
                    <div class="col">
                            <div class="row">
                                <label>nombre  </label>
                            <input placeholder="nombre" 
                                {...register("nombre", {required : true })}/>
                                {errors.nombre && <span>this field is required</span> }
                            </div>
                        <br/>
                            <div class="row">
                                
                            <label>contraseña  </label>
                                <input placeholder="contraseña" 
                                {...register("password", {required : true })}/>
                            
                            {errors.contraseña && <span>this field is required</span> }
                            </div>
                        <button>iniciar sesión</button>
                    </div>
            </form>
                    </>
     )
}