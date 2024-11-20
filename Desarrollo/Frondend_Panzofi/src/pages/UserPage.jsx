import {updateUser, getAllUsers, getUnicUser} from '../api/panzofi.api'; "../api/panzofi.api"
import {useParams} from 'react-router-dom'
import {useEffect, useState } from 'react';
import { Cronometro} from '../components/Cronometro';

export function Usuario(){

      const[counter1, setcounter1] = useState(0);
      const[counter2, setcounter2] = useState(0);
        const {id} = useParams();


      console.log("USER ID"+ id);


        useEffect(() =>{
                 async function loadTasks(){
                     const res = await getUnicUser(id);
                    setcounter1(res.data.contador1+1);
                    setcounter2(res.data.contador2+1);
                 }
                 loadTasks();
        }, []);



      const ContButtom1 = () =>{
        setcounter1(counter1 + 1);
        console.log('count1 ',counter1);
            updateUser(id, { contador1: counter1 } )
        }; 
      const ContButtom2 = () =>{
            setcounter2(counter2 + 1);
            console.log('count2 ', counter2);
            updateUser(id, { contador2: counter2 } )
      }

     

        


    return(
        <>
      
            <div>
                <Cronometro id={id} />
              <h1>Panzofi </h1>
              <h1>Prueba de ingreso equipo desarrollador</h1>
            <p>Descripción: </p>
            <p> Crear una aplicación utilizando Django y React. La aplicación es la interfaz de una consola de administración donde un      </p>
            <p> usuario tiene acceso de administrador y los 35 usuarios tienen acceso como usuarios regulares. Los usuarios para ingresar   </p>
            <p>  a la aplicación tienen que poner su usuario y contraseña. Si el usuario administrador ingresa, la aplicación mostrará la   </p>
            <p>  consola de administración y analiticos sobre los 35 usuarios. Quienes iniciaron sesión, por cuanto tiempo y si hicieron    </p>
            <p>  clic a un dos botones que están en la landing page de los usuarios. Si un usuario regular ingresa, la aplicación mostrará  </p>
            <p>  una landing page con un título, logo, una breve descripción y dos botones. Los botones actúan como contadores y se va      </p>
            <p>  almacenando un registro de cuando los usuarios ingresan a la aplicación y presionan los botones.                           </p>
           
            </div>
          <div >
                <button onClick={ContButtom1}>count1</button>
                <button onClick={ContButtom2}>count2</button>
          </div>
        </>
     )
}