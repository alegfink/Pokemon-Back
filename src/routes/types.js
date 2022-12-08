const { Router } = require('express');
const axios = require('axios');
const router = Router();
const { Op, Pokemon, Type, PokemonType } = require('../db.js');
const {setTypes} = require('./middleware/getTypes')

router.get('/', async(req,res)=>{
    try{
        await setTypes()
        const types = await Type.findAll();
        types? res.status(202).json(types): res.status(404).json('no hay types creados')
    }catch(err){
        res.status(404).json('error al hacer el get a types')
    }
    
})

module.exports = router;