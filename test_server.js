const axios = require('axios')

let client = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 1000,
})

client.post("/user", {id:'00001', name: 'Jose Garcia' , passwd: '1234', tipo_dieta: 'vegana'})
      .then(response => console.log(response.data))
      .catch(error => console.log(error))

client.post("/dieta", {id:'00001', name: 'alcachofas' , creatorID: '00001' , tipo_dieta: 'vegana' , ingredientes : '{ingrediente1: alcachofas, ingrediente2: tomate}'})
     .then(response => console.log(response.data))
     .catch(error => console.log(error))
