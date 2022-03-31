const mongoose = require("mongoose");

//Principio solid: responsability
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("DB CONNECTED")
    } catch(err){
        console.log("DB CONEECTION ERROR", err);
        process.exit(1)
    }
    
}


module.exports = connectDB;