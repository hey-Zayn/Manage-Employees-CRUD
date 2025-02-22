const mongoose = require("mongoose");

const connectionDB = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log(`DB connected successfully ${mongoose.connection.host}`);
    }).catch(()=>{
        console.log(`DB Error`);
    });
}


module.exports = connectionDB