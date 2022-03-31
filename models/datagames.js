const mongoose = require("mongoose");


const gameSchema = new mongoose.Schema(
    {
        name: String,
        gender: String,
        year: Number,
        image: String,
        maxplayers: String,
        company: String,
        plataform: String
    },
    {timestamps: true}
);

module.exports = mongoose.model("datagames", gameSchema)