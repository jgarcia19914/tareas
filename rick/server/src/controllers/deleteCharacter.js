const {Character}= require ("../bd");



const deleteCharacter = async (id)=>{
const character = await Character.findByPk(id)
const aux = {...character};
await character.destroy()
return aux;
}
module.exports = deleteCharacter

