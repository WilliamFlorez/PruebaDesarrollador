import { useForm } from "react-hook-form"
import { login } from "../api/task.api";


export function Login(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = handleSubmit( async data => {
        {/*const res = await  login(data);*/}
        console.log(data);
    })

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
                        <button>save</button>
                    </div>
            </form>
                    </>
     )
}