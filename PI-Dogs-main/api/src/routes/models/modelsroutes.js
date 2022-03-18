module.exports = {

    findDetails : (responseAxios) => {
        let filtered = responseAxios.filter(dog => dog.temperament !== undefined)
        let data = filtered.map(dog =>{
            let doggo = {  
                id: dog.id,
                name: dog.name, 
                height: dog.height.metric,
                weight: dog.weight.metric,
                life_span: dog.life_span,
                img: `https://api.thedogapi.com/v1/images/${dog.reference_image_id}.jpg`,
            }
            return doggo;
        })
        return data;
    }
}