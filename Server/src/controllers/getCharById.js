const axios = require('axios');

const URL = "https://rym2.up.railway.app/api/character/${id}?key={pi-cand3m}";
async function getCharById(req, res){

    try{
        const id = req.params.id
        const response = await axios.get(URL.replace("${id}", id));

        if(response.data){
            const {id,status,name,species,origin,image,gender} = response.data;
            res.json({id,status,name,species,origin,image,gender});
        }
        else{
            res.status(404).json({message: "Not found"});
        }
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = getCharById;