module.exports = {

    findDetails : (responseAxios) => {
        let filtered = responseAxios.filter(dog => dog.temperament !== undefined)
        let data = filtered.map(dog =>{
            let doggo = {  
                id: dog.id,
                name: dog.name, 
                height: {metric: dog.height.metric},
                weight: {metric: dog.weight.metric},
                life_span: dog.life_span,
                temperament: dog.temperament,
                image: {url: dog.reference_image_id?`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`:
                        `https://c.tenor.com/SZvrw_H_VJYAAAAC/puglie-pug-puglie.gif`},
            }
            return doggo;
        })
        return data;
    }
}