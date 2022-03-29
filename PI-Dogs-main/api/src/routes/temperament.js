const express = require('express');
const router = express.Router();
const axios = require('axios');
const {Temperaments } = require('../db.js');

router.use(express.json());

router.get ('/' , async (req, res) => {
    const functionTemp = async () => {
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
                result.sort().map(t => {
                    Temperaments.create({
                        name: t
                    })
                })
            );    

            return functionTemp();
        }

        temperamentsArray = temperamentDb.map(t => {
            return tem={
            name:t.name,
            id: t.id}
        });
        console.log('Estoy en la base de datos :D')
        res.json(temperamentsArray);
    };

    functionTemp();
})
module.exports = router;
