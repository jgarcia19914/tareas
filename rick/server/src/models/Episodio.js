const { DataTypes } = require("sequelize");
const DataBase = require("../bd");

module.exports =(DataBase)=>{
    DataBase.define("Episode",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
        }
    })
}