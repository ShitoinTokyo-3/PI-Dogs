const express = require('express');
const router = express.Router();
const { Dog,Temperaments } = require('../db.js');

router.use(express.json());

router.post('/', async (req, res) => {
    //TODO: recibir todo lo que se necesite por body

    const {temperaments, name, heightMin, heightMax, weightMin, weightMax, life_span} = req.body

    try {
        if(!name, !heightMin, !heightMax, !weightMin, !weightMax) throw new Error('name , height , weightMin , weightMax are required');

        const doggo = await Dog.create({
            name: name.trim().toLowerCase().replace(/\b\w/g, l => l.toUpperCase()),
            height: `${heightMin.trim()} - ${heightMax.trim()}`,
            weight: `${weightMin.trim()} - ${weightMax.trim()}`,
            life_span: life_span.trim()
        })

        await doggo.addTemperaments(temperaments);


        res.json('done')

    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message)
    }
    // if(!name, !heightMin, !heightMax, !weightMin, !weightMax) throw new Error('name , height , weightMin , weightMax are required')

    // Dog.create({
    //             name: name.trim().toLowerCase().replace(/\b\w/g, l => l.toUpperCase()),
    //             height: `${heightMin.trim()} - ${heightMax.trim()}`,
    //             weight: `${weightMin.trim()} - ${weightMax.trim()}`,
    //             life_span: life_span.trim()
    //         })
    //         .then(response => {
    //             response.addTemperaments(temperaments)
    //             res.json('done')
    //         })
    //         .catch(err => res.status(400).json(error.message))

})

module.exports = router;