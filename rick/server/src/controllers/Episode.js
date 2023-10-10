const {Episode}= require ("../bd");

const findAllEpisodes = async ()=>{
    const episodes = await Episode.findAll();// find all trae todos losdatos de BD
    return episodes;
};
/*

*/
module.exports = findAllEpisodes;
