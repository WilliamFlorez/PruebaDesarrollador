{/* componente que cargará las peticiones de TASKLIST*/}

export function TaskCard( {task} ) {
    return(
        <div > 
            <h1>{task.title}</h1>
            <p> {task.description}        </p>
            <hr></hr>
        </div>
    );

}