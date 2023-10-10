const express = require ("express")
const findAllEpisodes = require ("./src/controllers/Episode")
const createEpisode = require ("./src/controllers/EpisodeCreate")
const createCharacter = require ("./src/controllers/CreateChracter")
const findAllCharacters = require ("./src/controllers/findAllCharacters")
const findCharactersByid = require ("./src/controllers/findCharactersByid")
const deleteCharacter=require ("./src/controllers/deleteCharacter.js")
const createBulkepisodes = require ("./src/controllers/createBulkepisodes.js")
const server = express()
server.use(express.json());

server.get("/characters",async(req,res)=>{
    const {status}=req.query;// en la query premite recibir parametros de la url
        try {
        const episodes = status 
        ? await findAllCharacters({status})//Evalua el status de la URL y lo pasa 
        : await findAllCharacters(); // si esta vacio permite mostrar todos los datos 
        res.status(200).json(episodes)
    } catch (error) {
       res.status(500).json ({error:error.message});
   }
});

server.get("/characters/:id",async(req,res)=>{
     try {
        const {id}=req.params;// en la query premite recibir parametros de la url
        const filtroid = await findCharactersByid(id);
        res.status(200).json(filtroid);
     } catch (error) {
        res.status(500).json ({error:error.message});
     }
});

server.post("/characters",async(req,res)=>{
    try {
    const {name,gender,status,orgin,species,episodes}= req.body
    const newCharacter = await createCharacter(name,gender,status,orgin,species,episodes)
    res.status(200).json(newCharacter)
    } catch (error) {
        res.status(500).json ({error:error.message}); 
    }
});

server.get("/episode",async (req,res)=>{
    try {
        const episodes = await findAllEpisodes();
        res.status(200).json(episodes)
    } catch (error) {
       res.status(500).json ({error:error.message});
   }
});

server.post("/episode",async(req,res)=>{
    try {
    const {name}= req.body
    const newEpisode = await createEpisode(name)
    res.status(201).json(newEpisode)
    } catch (error) {
        res.status(500).json ({error:error.message}); 
    }
    
});

server.delete("/characters/:id",(req,res)=>{
    const {id}= req.params;
    try {
        const DeleteCharacter = deleteCharacter(id);
        res.status(200).json(DeleteCharacter);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

server.post ("/episode/bulk", async (req,res)=>{
    try {
    const {episodes} = req.body;
    const created = await createBulkepisodes(episodes);
    res.status(200).json({response : "created"})
} catch (error) {
    res.status(500).json({ error: error.message});    
}

})

module.exports = server;