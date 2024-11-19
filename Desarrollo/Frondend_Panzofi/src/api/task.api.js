import axios from 'axios';
{/* biblioteca para hcer peticiones get, post, delete, update*/}

{/*Base de URL para peticiones */}
const tasksAPI = axios.create({
   /* baseURL: 'http://localhost:8000/tasks/api/v1/',*/
      baseURL: 'http://localhost:8000/PruebaTec/panzofi/v1/',
});


export const getAllTasks = () => {
   {/**return axios.get('http://localhost:8000/tasks/api/v1/tasks/') */} 
    return tasksAPI.get('user/')
};

export const createTasks = (task) => {
   {/* return axios.post('http://localhost:8000/tasks/api/v1/tasks/') */} 
    return tasksAPI.post('tasks/',task)
};

export const login = (params) => {
    {/* return axios.post('http://localhost:8000/tasks/api/v1/tasks/') */} 
     return tasksAPI.get('Usuarios/',params)
 };