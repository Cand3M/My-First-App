const axios = require('axios');

function getCharById(res, id){
    axios(`http://localhost:3001/rickandmorty/character/${id}?key={pi-cand3m}`)

    .then(response => {
        const {id, name, gender, species, origin, image, status} = response.data;

        const character = { id, name, gender, species, origin, image, status };

        res.status(200).json(character);
    })
    .catch(error => {
        res.status(500).send(error);
    })
}

module.export = getCharById;