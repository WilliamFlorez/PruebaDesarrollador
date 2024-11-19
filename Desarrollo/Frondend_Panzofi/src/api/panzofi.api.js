import axios from 'axios';
{/* biblioteca para hcer peticiones get, post, delete, update*/}

{/*Base de URL para peticiones */}
const PanzofiAPI = axios.create({
    baseURL: 'http://localhost:8000/PruebaTec/panzofi/v1/',
});


export const getAllUsers = () => {
     return PanzofiAPI.get('user/')
 };
 export const getUnicUser = (id) => {     PanzofiAPI.get( `/user/${id}/`) };
        
/*export const findUser = (id) => { PanzofiAPI.post('user/',id) };*/
export const findUserName = (name) => { PanzofiAPI.get('user/',name) };


export const updateUser = (id, info) => { PanzofiAPI.patch(`user/${id}/`,info) };

export const findUserByCredentials = (username, password) => {
    return PanzofiAPI.post('user/login/', { username, password });
};

/*   Login de usuarios
export const login = (params) => {*/
    {/* return axios.post('http://localhost:8000/tasks/api/v1/tasks/') */} 
  /*   return PanzofiAPI.post('Usuarios/',params)
 };*/