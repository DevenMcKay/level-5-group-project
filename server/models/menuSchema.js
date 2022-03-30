// const { urlencoded } = require("express")
const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Menu Blueprint
const menuSchema = new Schema({
    image: {
        type: String 
    },
    item: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    type: {
        type: String
    },
    ingredients: {
        type: Array
    },
    steps: {
        type: Array
    }
})

module.exports = mongoose.model("Menu", menuSchema)