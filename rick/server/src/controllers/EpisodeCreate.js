const {Episode}= require ("../bd");


const createEpisode = async (name) =>{
    const newEpisode = await Episode.create({name});// crea un registo en la bd-- se agreag un objeto con los valores a crear
    return newEpisode;
};
module.exports = createEpisode;