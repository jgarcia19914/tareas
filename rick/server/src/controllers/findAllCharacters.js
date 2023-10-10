const {Character,Episode}= require ("../bd");



const findAllCharacters =async (query)=>{
    const todos =await Character.findAll({
        where:query,// {status:Alive}
        include:{
        model:Episode,
        attributes:["name"],
        through:{
            attributes:[],
        },
    },
    });

    return todos
}

module.exports = findAllCharacters;