let express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('./config/database/connection/connection');
const Recipe = require('./config/database/models/Recipe');
const fetch = require("node-fetch");
const path = require('path');

let app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('common'));

app.use(express.static(path.join(__dirname, '/build')));


function getRecipeURL(keyword, from, to){
    return `https://api.edamam.com/search?q=${keyword}&app_id=${process.env.edamam_recipe_app_id}&app_key=${process.env.edamam_recipe_api_key}&from=${from}&to=${to}`;
}
async function getRecipe (keyword, from=0, to=100) {
    if(keyword === ''){
        return;
    }
    const res = await fetch(getRecipeURL(keyword, from, to), {
    headers: {
        'Accept-Encoding': 'gzip'
    },
    method: 'GET'
    });
    return await res.json();
}
    
async function searchKeyword(keyword){
    return await Recipe.find({keyword:keyword});
}


async function insertRecipe(keyword){
    const recipes = await getRecipe(keyword);
    if(recipes.hits.length !== 0){
    const allData = recipes.hits;
    await allData.forEach(async(recipe) => await createRecipe(recipe.recipe, keyword));
    return await Recipe.find({
        keyword: keyword
    });
    }
}
async function createRecipe(data, keyword){
    const tags = [];
    data.dietLabels.forEach( dlabel => tags.push(dlabel));
    data.healthLabels.forEach( hlabel => tags.push(hlabel));
    const recipe = new Recipe({
        keyword: keyword,
        title: data.label,
        ingredients: data.ingredientLines,
        id: data.label + ' ' + Math.random(),
        image: data.image,
        tags: tags,
        cookingTime: data.totalTime,
        source: data.source,
        url: data.url,
        dateCreated: (new Date())
    });
    await recipe.save((err) => {
        if(err){
            console.log('Error saving recipe.');
        }
    });
    return true;
}
async function doTheWork(word){
    const hits = await searchKeyword(word);
    if(hits.length === 0){
        await insertRecipe(word);
        return await searchKeyword(word);
    }
    return hits;
}

app.post('/api/recipes', (req, res)=>{
    let { keyword } = req.body;
    doTheWork(keyword).then(result => {
        res.json({hits:result});
    });
});


const port = process.env.PORT || 1337;
app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});


module.exports = app;