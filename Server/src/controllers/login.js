const UserModel = require('../DB_connection');

async function Login(req, res){
    try{
        const {email, password} = req.body;

        if(!email ||!password){
            return res.status(400).json('Faltan datos');
        }
        const user = await UserModel.findOne({where: {email}});
        
        if(!user){
            return res.status(404).json('Usuario no encontrado');
        }
        if(user.password !== password){
            return res.status(403).json('Contraseña incorrecta');
        }

        return res.status(200).json({access :true});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
}

module.exports = Login; 