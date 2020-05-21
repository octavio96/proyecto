const sc = require('./schemas')
const mng = require('mongoose') 
const atlas_connect = mongodb+srv://octavio:3953oceA@cluster0-xsxis.mongodb.net/test?retryWrites=true&w=majority

mng.connect(atlas_connect)

var UserModel = mng.model('user', new mng.Schema(sc.user))
var DietaModel = mng.model('dieta', new mng.Schema(sc.dieta))

exports.insertDieta = (data) => {

    var data = new dietaModel({
        identifier: data.id,
        name : data.name,
        creatorID : data.creatorID ,
        tipo_dieta : data.tipo_dieta,
	ingredientes: data.ingredientes,
        
    })

    data.save()
}

exports.getDieta = async (id) =>{
    return DietaModel.findOne({identifier : id})
 }

exports.getDietatByName = async (name) => {
    return DietaModel.find({name: name})
}
 

//User   {id: Number, name: String , passwd: String, tipo_dieta: String}
//Dieta  {id: Number, name: String , creatorID: Number,tipo_dieta: String, ingredientes: String }



