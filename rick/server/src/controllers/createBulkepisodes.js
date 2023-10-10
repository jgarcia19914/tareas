const {Episode}= require ("../bd");


const createBulkepisodes = async(episodes) =>{
 const newepisodes = await Episode.bulkCreate(episodes)
 return newepisodes;
}
module.exports = createBulkepisodes;