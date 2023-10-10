const {Character} =  require ("../bd") 

const createCharacter = async(name,gender,status,orgin,species,episodes)=>{
    const NewCharacter = await Character.create({name,gender,status,orgin,species});
    NewCharacter.addEpisodes(episodes);
    return NewCharacter;
}

module.exports = createCharacter;