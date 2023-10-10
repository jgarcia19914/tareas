const {Character, Episode}= require ("../bd");



const findCharactersByid =async (id)=>{
    const todos =await Character.findByPk(id,{
        include:{
            model:Episode,
            attributes:["name"],
            through:{
                attributes:[],
            },
        },       

    });
    if(!todos) throw Error ("peronaje no existe");
    return todos;
}
module.exports = findCharactersByid