import { useEffect, useState } from "react"
import { getAllUsers } from "../api/panzofi.api"; "../api/panzofi.api"

{/* para guardar infromacion s eusa usestate*/}

export function TaskList(){

    const [tasks, setTasks] = useState([]);

   useEffect(() =>{
            async function loadTasks(){
                const res = await getAllUsers();
               {/* console.log(res.data);*/}
               setTasks(res.data);
            }
            loadTasks();
   }, []);
   
   return   ( 
            <div>

        <table border="1">
                <thead>
                    <tr>
                        <th>nombre</th>
                        <th>fecha</th>
                        <th>tiempo</th>
                        <th>Contador 1</th>
                        <th>Contador2</th>
                    </tr>
                </thead>
                <tbody>
                            {/* Genera una fila por cada tarea */}
                            {tasks.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.nombre}</td>
                                    <td>{task.date}</td>
                                    <td>{task.tiempo}</td>
                                    <td>{task.contador1}</td>
                                    <td>{task.contador2}</td>
                                </tr>
                            ))}
                        </tbody>
        </table>

            </div>)
}