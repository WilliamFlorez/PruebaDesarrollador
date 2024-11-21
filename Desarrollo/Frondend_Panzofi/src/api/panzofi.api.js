import axios from 'axios';
{/* biblioteca para hcer peticiones get, post, delete, update*/}

{/*Base de URL para peticiones */}
const PanzofiAPI = axios.create({
    baseURL: 'http://localhost:8000/PruebaTec/panzofi/v1/',
});


export const getAllUsers = () => {
     return PanzofiAPI.get('user/')
 };
 export const getUnicUser = (id) => {
       return  PanzofiAPI.get( `user/${id}/`) };
        
/*export const findUser = (id) => { PanzofiAPI.post('user/',id) };*/
export const findUserName = (name) => {
     return PanzofiAPI.get(`user/${name}/`) };


export const updateUser = (id, info) => {
     PanzofiAPI.patch(`user/${id}/`,info) };

