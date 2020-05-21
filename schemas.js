exports.user = {
    "@id": String,
    identifier: Number,
    name: String,
    passwd : String,
    tipo_dieta : String,

}

exports.dieta = {
    "@id": String,
    identifier: Number,
    name : String,
    creatorID: Number,
    tipo_dieta : String,
    ingredientes: [String],
   
}


//User   {id: Number, name: String , passwd: String, tipo_dieta: String}
//Dieta  {id: Number, name: String , creatorID: Number,tipo_dieta: String, ingredientes: String }


