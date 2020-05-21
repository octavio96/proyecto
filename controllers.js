const M = require('./model')

const SSE = require('express-sse') //Server-side events


exports.middleware = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 
	           'Origin, Content-Type, Accept')
    res.header('Cache-Control', 'no-cache')
	
	/*  
	//Todas las llamdas REST con token: user/345?token=asCDSAsa
	if (req.query && req.query.token != 'asCDSAsa'){ //Security token

		res.status(403)
		return
	} 
	*/
	
	next()
}

const STREAM = new SSE()

exports.eventStream = (req, res) => {

  console.log('Nueva conexion SSE ...')

  STREAM.init(req, res)

}

exports.getUsers    = async (req, res) => res.send({result: await M.getUsers()})

exports.getUserData = async (req, res) => res.send({result: await M.getUserData(req.param.id)})

exports.updateUser  = async (req, res) => res.send({result: await M.createUser(req.body)}) //POST

//exports.getDieta    = async (req, res) => res.send({result: await M.getDieta()})

exports.createDieta  = async (req, res) => res.send({result: await M.createDieta(req.body)}) //POST
									
//exports.searchDieta  = async (req, res) => res.send({result: await M.searchDieta(re.query.q)})

//exports.getDietaData = async (req, res) => res.send({result: await M.getDietaData(req.param.id)})

exports.deleteUser =	async (req,res) => res.send({result: await model.removeUser(req.params.id)})

exports.getDieta	=	async (req,res) => res.send({result: await model.getDieta(req.params.id)})

exports.getDietatByName =  async (req,res) => res.send({result: await model.getDietaByName(req.params.name)})


