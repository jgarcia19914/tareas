const server = require ("./server");
const {DataBase} = require("./src/bd")


//levanto la bd // luego el servidot .then//
DataBase.sync({alter:true}).then(()=>{
    server.listen ("3001",()=>{
        console.log("servidor on", 3001);
    })
})
.catch((err)=>console.log(err));

