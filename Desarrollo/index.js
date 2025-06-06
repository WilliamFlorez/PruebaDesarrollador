/* servidor web simple- API  */
/*express
 peticiones get/ post / delete 
*/
const express = require('express')
const app = express()
//controlador recibir BODY
app.use(express.json())

 let bd = [
   { "id" : 1,
    "Cantante" : "Chayane",
    "fecha" : "12/02/2001",
    "ciudad" : "Mexico"}

 ]

const NewId = () => {
  const maxId = bd.length > 0 ?
      Math.max( ... bd.map( nid => nid.id)) : 0
      return maxId+1
}


app.get("/",(request, response) => {
    response.send("<h1>Hello world!</h1>")
})

app.get("/api/info",(request, response) => {
        response.json(bd)
})

app.post("/api/info",(request, response) => {
        const new_Concert = request.body
        console.log(new_Concert)
        if(!request.body){
            return response.status(400).json({  error: 'content missing' })
        }

        const db_Post = {  "id" : NewId,
                      "Cantante" : new_Concert.Cantante,
                      "fecha" : new_Concert.fecha,
                      "ciudad" : new_Concert.ciudad}

        bd = bd.concat(db_Post)

        response.json(bd)
})




const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)