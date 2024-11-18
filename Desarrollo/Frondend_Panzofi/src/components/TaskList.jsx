import { useEffect, useState } from "react"
import { getAllTasks } from "../api/task.api"; "../api/task.api"
import { TaskCard } from "./TaskCard"

{/* para guardar infromacion s eusa usestate*/}

export function TaskList(){

    const [tasks, setTasks] = useState([]);

   useEffect(() =>{
            async function loadTasks(){
                const res = await getAllTasks();
               {/* console.log(res.data);*/}
               setTasks(res.data);
            }
            loadTasks();
   }, []);
   
   return   ( 
            <div>
                {tasks.map((task) => (
                       < TaskCard key ={task.id} task ={task} />
                ))}
            </div>)
}