const { Router } = require('express');
const axios = require('axios');
const router = Router();
const { Pokemon, Type } = require('../../db.js');
const { type } = require('os');

const setTypes = async () =>{
    try{
        const pokemonTypes = await axios.get('https://pokeapi.co/api/v2/type');
        const types = pokemonTypes.data.results.map(el=>el.name)
        types.forEach(el=>{
            
            Type.findOrCreate({
                where: {name: el}
            })
        });
        
        return types
    }catch(err){
        throw new Error('error al setear types')
    }
}

module.exports = {setTypes}