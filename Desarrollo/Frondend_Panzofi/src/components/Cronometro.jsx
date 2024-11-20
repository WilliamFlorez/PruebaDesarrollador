import {updateUser} from '../api/panzofi.api'; "../api/panzofi.api"
import {useEffect, useState } from 'react';

export function Cronometro({id}){


    useEffect(() => {
            let pageLoadTime; // variable almacenamiento Tiempo
            
                const TimeLoad = new Date();
                pageLoadTime  = TimeLoad;
                const pageLoadMonth = TimeLoad.getMonth() + 1;
                //console.log("Página cargada en:", pageLoadTime.toLocaleString());
            updateUser(id, { date: pageLoadTime } )
            
                    

            const handleBeforeUnload = () => {
            const pageUnloadTime = new Date();
            const timeSpentInMinutes = (pageUnloadTime - pageLoadTime) / 60000; // Tiempo en minutos (1 minuto = 60000 ms)
            console.log(`La página estuvo abierta por ${timeSpent} segundos.`);  
            const temp = timeSpentInMinutes + " Minutos";    
                updateUser(id, { tiempo: temp } )
            };
                
    // Actua cuando la pagina se esta cerrando
    window.addEventListener("beforeunload", handleBeforeUnload);


    return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
    };

    }, [id]);


  return null; 
}
