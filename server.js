const bodyparser = require('body-parser')
const express    = require('express')

const control = require('./controllers')

const app = express() //API Main object
 
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(control.middleware) //Done

app.use('/web', express.static('public'))

app.get('/news', control.eventStream) //Stream of Server-side events

app.get('/user/', control.getUsers)

app.post('/user/', control.createUser)

app.get('/user/:id', control.getUserData ) //Done

app.delete('/user/delete/:id', control.removeUser)

app.get('/dieta/:id', control.getDietaData ) //Done

app.get('/dieta/', control.getDieta)

app.post('/user', control.updateUser ) //Done
//app.post('/user', control.updateDieta ) //Done
app.post('/dieta', control.createDieta )


app.get('/dieta/:name', control.getDietaByName)
app.get('/dieta/:id', control.getDieta)
//etc ...

const PORT = 8080
app.listen(PORT, _ => console.log(`Servidor web escuchando en puerto ${PORT}`))


