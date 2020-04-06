import React, {useState, useEffect} from 'react';
import '../App.css';
import Recipe from './Recipe';
import SearchBar from './SearchBar';
  
const Container = () => {
    function getRecipeURL(keyword, from, to){
        const API_KEY = '8baf31646a8d0037546284406907bb6d';
        const application_ID = '0fd4faa5';
        const url = 'https://api.edamam.com/search';
        return url + `?q=${keyword}&app_id=${application_ID}&app_key=${API_KEY}&from=${from}&to=${to}`; 
    }
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getRecipe = async(keyword, from, to) => {
        if(keyword === ''){
            return;
        }
        const res = await fetch(getRecipeURL(keyword, from, to), {
        headers: {
            'Accept-Encoding': 'gzip'
        },
        method: 'GET'
        });
        const data = await res.json();
        if(data.hits.length > 0){
            setRecipes(data.hits);    
        }else{
            window.alert(`No recipes found for ${keyword}. Please try another item.`);
        }
    };

    const execute = (keyword) => {
        setSearchTerm(keyword);
        console.log(keyword);
    };

    useEffect(()=>{
        getRecipe(searchTerm, 0, 50);
    }, [searchTerm]);


    return(
        <div className="App">
        <SearchBar id="recipeSearch" parentCallBack={execute}/>
        <div className="recipeContainer">
            {recipes.map(recipe => (
            <Recipe
            key={recipe.recipe.label+''+ Math.random()}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}
            tags={
                function (){
                const dietLabels = recipe.recipe.dietLabels;
                const healthLabels = recipe.recipe.healthLabels;
                const tags = [];
                dietLabels.forEach( dlabel => tags.push(dlabel));
                healthLabels.forEach( hlabel => tags.push(hlabel));
                return tags;
                }()
            }
            source={recipe.recipe.source}
            url={recipe.recipe.url}
            cookingTime={recipe.recipe.totalTime}
            />
            ))}
        </div>
        </div>
    );
}
export default Container;
  