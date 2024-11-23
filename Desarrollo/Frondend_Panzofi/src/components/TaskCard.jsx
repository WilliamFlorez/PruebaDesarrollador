{/* componente que cargará las peticiones de TASKLIST*/}

export function TaskCard( {task} ) {
    return(
        
        <div > 
            
            <h1>NOMBRE {task.nombre}</h1>
            <p>date: {task.date}        </p>
            <p>tiempo: {task.tiempo}        </p>
            <p>contador1:: {task.contador1}        </p>
            <p>contador1::  {task.contador2}        </p>
            <hr></hr>
        </div>
    );

}