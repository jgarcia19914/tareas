require("dotenv").config();

const {HOST,USER,PASSWORD,BDNAME,PORT}=process.env;
const {Sequelize} = require ("sequelize");
const characterfuntion = require ("./models/Characters")
const EpisodeFuntion = require("./models/Episodio")


const DataBase =new Sequelize (
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDNAME}`,{logging:false} 
    );                                                     //loggin permite que no me ensucie el postgres 

EpisodeFuntion(DataBase);
characterfuntion(DataBase);

const {Character,Episode}= DataBase.models;
Character.belongsToMany(Episode, {through:"CharacterEpisode"});
Episode.belongsToMany(Character, {through:"CharacterEpisode"});



module.exports = {DataBase,
                    ...DataBase.models,
                
                }; 