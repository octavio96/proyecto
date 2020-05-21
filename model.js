var _ = require('lodash');
var db = require('./database')
//User   {id: Number, name: String , passwd: String, tipo_dieta: String}
//Dieta  {id: Number, name: String , creatorID: Number,tipo_dieta: String, ingredientes: String }

var context = "http://schema.org/"
let Users = {}
let Dieta = {}


//Most of the methods will be asynch when using a true DB

exports.createUser = data => { 
    //check if data is valid
	if (!data.id || !data.name || !data.passwd || !data.tipo_dieta)
		return 'KO'
	
    if (Users[data.id])
	    Users[data.id] = Object.assign(Users[data.id], data)
	else
		Users[data.id] = data
		console.log(data)
		await db.insertUser(data)
		console.log('Info model::', Users[data.id])
	
	return 'OK'

}

exports.getUserData = async (id) => {
	return finalData = await db.getUser(id).then(user => {
		user["@context"]= context;
		user["@type"] = "Person";
		return user
	}).catch(error => {return null})
}
exports.removeUser = (UserId) => {
	if(delete Users[UserId]) return 'OK'
	return 'KO'
}


exports.createDieta = data => {
	 //check if data is valid
	if (!data.id || !data.name || !data.creatorID || !data.tipo_dieta || !data.ingredientes)
		return 'KO'
	
    if (Dieta[data.id])
	    Dieta[data.id] = Object.assign(Dieta[data.id], data)
	else
		Dieta[data.id] = data
	
	return 'OK'
}

exports.updateDieta = data =>  {

	if (Dieta[data.id]){
		Dieta[data.id] = Object.assign(Dieta[data.id], data)
		return 'OK'
	}

	return 'KO'

}

exports.insertDieta = async (DietaData, stream) => { 
	//check if data is valid
	if (!data.id || !data.name || !data.creatorID || !data.tipo_dieta || !data.ingredientes){
		console.log("Error")
		return 'KO'
	} else {
		console.log(DietaData)
		await db.insertDieta(DietaData)
		stream.send(JSON.stringify(DietaData),"nueva dieta")
		Dieta[DietaData.id] = DietaData
	}
	
	return 'OK'

}

exports.getDieta = async (id) => {
	return finalData = await db.getDieta(id).then(dieta => {
		dieta["@context"]= [context, {"syncs": "http://syncsschema.com" }];
		dieta["@type"] = "Dieta";
		return dieta
	}).catch(error => {return null})
}

exports.getDietaByName = async (name) => {
	return finalData = await db.getDietaByName(name).then(dieta => {
		dieta["@context"]= [context, {"syncs": "http://syncsschema.com" }];
		dieta["@type"] = "Dieta";
		return dieta
	}).catch(error => {return null})
}



//exports.getDieta = () => Object.keys(Dieta).map(k => ({id: Dieta[k].id, name: Dieta[k].name, tipo_dieta: Dieta[k].tipo_dieta, ingredientes: Dieta[k].ingredientes}))

//exports.getDietaData = DietaId => Dieta[DietaId] || null

//exports.searchDieta = (text) => Object.keys(Dieta).filter(b => Dieta[b].name.includes(text))
                                                 //.map(b => Dieta[b].name) ¿cual de los dos uso?

//exports.removeDieta = (DietaId, creatorID) => {}




