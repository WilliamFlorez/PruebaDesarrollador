import { TaskList } from "../components/TaskList";
import { Graphics } from "../components/Graphics";  // Importamos el componente Graph_api

/* se instala la biblioteca para grafica
npm install react-chartjs-2 chart.js
*/
export function Admin(){
    return    (
        <div>
          <h1>Admin Page</h1>
          <TaskList /> {/* lista de ususarios*/}
          <Graphics /> {/* grafica con valores de botones*/}
        </div>
      );
    }