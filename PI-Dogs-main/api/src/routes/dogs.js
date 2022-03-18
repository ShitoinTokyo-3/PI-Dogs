const express = require('express');
const {Op} = require('sequelize')
const models = require('./models/modelsroutes.js')
const router = express.Router();
const axios = require('axios');
const { Dog,Temperaments } = require('../db.js');

router.use(express.json());


//TODO: GET/dogs/
//comentarios: Recordar que cuando la api busca por raza no da los objetos 
//con la propiedad img, solo su referencia `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`
router.get('/', async (req, res) =>{
    const {name} = req.query;
    let data = [];

    //TODO:Primero hacer la busqueda en la base de datos

    let dogs = undefined;
    if(!name){
    dogs = await Dog.findAll({
        include:Temperaments
    });
    }else{
        dogs = await Dog.findAll({
            where: { 
                name:{
                    [Op.like]: name
                },
            },
            include:Temperaments,
        });
    }
    dogs.forEach(dog => {
        data.push({
            id : dog.dataValues.id,
            name : dog.dataValues.name, 
            height: {metric: dog.dataValues.height},
            weight: {metric: dog.dataValues.weight},
            life_span: dog.dataValues.life_span,
            temperaments : dog.Temperaments.map(t => t.dataValues.name).join(', '),
        })
    });

    //TODO: Despues hay que buscar la info en la API 

    if(name){
        axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
            .then(response => {
                data = [
                    ...data,
                    ...models.findDetails(response.data)
                ]
            })
            .then(() => {
                if(!data.length) throw new Error('Doggos not found');
                res.json(data)
            })
            .catch((error) => {
                res.status(404).send(error.message);
            })
    }else{
        axios.get('https://api.thedogapi.com/v1/breeds')
            .then(response => {
                data = [
                    ...data,
                    ...response.data.filter(dog => dog.temperament !== undefined)
                ]
            })
            .then(() => {
                if(!data.length) throw new Error('Doggos not found');
                res.json(data) // Enviar lo que se encontro en la api y DB
            })
            .catch((error) => {
                res.status(404).send(error.message);
            })
    }
});

router.get('/:idRaza', async (req, res) => {
    const {idRaza} = req.params
    console.log(idRaza)
    let data = {};
    if(idRaza.includes('-')){
        //TODO: buscar en la DB y si lo encuentra mandarlo
        //Try catch 
        const dog = await Dog.findOne({
            where: {
                id: idRaza,
            },
            include: Temperaments,
        },console.log('Holaaaa'));
        if(dog){
            data = {
                id : dog.dataValues.id,
                name : dog.dataValues.name, 
                height: {metric: dog.dataValues.height},
                weight: {metric: dog.dataValues.weight},
                life_span: dog.dataValues.life_span,
                temperaments : dog.Temperaments.map(t => t.dataValues.name).join(', '),
            }
            res.json(data)
            }
    }else{ 
        //TODO: Si no lo encontro en la base de datos, hay que buscarlo en la API 
        
        axios.get('https://api.thedogapi.com/v1/breeds')
            .then(response => {
                res.json(response.data.find(dog => dog.id === parseInt(idRaza)))
            })
            .catch((error) => {
                res.status(400).json({ msg: 'Doggo not found'} );
            })
    }
})

module.exports = router;