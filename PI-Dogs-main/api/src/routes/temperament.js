const express = require('express');
const {Op} = require('sequelize')
const models = require('./models/modelsroutes.js')
const router = express.Router();
const axios = require('axios');
const { Dog,Temperaments } = require('../db.js');

router.use(express.json());

router.get('/', async (req, res) =>{
    const temperamentDb = await Temperaments.findAll();
    let temperamentsArray = []

    if(!temperamentDb.length){
        await axios.get('https://api.thedogapi.com/v1/breeds')
            .then(response => {
                response.data.map(dog =>{
                    if(dog.temperament){
                        temperamentsArray.push(...dog.temperament.split(', '))

                    }
                });
            });
        
        const temperaments = new Set(temperamentsArray);
        const result = [...temperaments]
        

        await Promise.all(
            result.map(t => {
                Temperaments.create({
                    name: t
                })
            })
        );
        return res.json(result);
    }

    temperamentsArray = temperamentDb.map(t => t.name);
    console.log('Estoy en la base de datos :D')
    res.json(temperamentsArray);
});



module.exports = router;
