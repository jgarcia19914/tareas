const { DataTypes}= require ("sequelize")

module.exports = (DataBase) => {
    
DataBase.define("Character",{
    id:{type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,

    },
    gender:{ type:DataTypes.STRING,
        },
    status:{
        type: DataTypes.ENUM('Alive','Dead',"Unknown"),
        defaultValue:"Unknown",
    },  
    orgin:{type:DataTypes.STRING,

    },
    species:{type:DataTypes.STRING,
    },
});
};