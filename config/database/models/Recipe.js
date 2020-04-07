let {Schema} =require('mongoose');
let connection = require('../connection/connection');


const recipeSchema = Schema({
    keyword: String,
    title: String,
    ingredients: Array,
    id: String,
    image: String,
    tags: [],
    cookingTime: Number,
    source: String,
    url: String,
    dateCreated: Date
});


let Recipe = connection.model('Recipe', recipeSchema);
module.exports = Recipe;