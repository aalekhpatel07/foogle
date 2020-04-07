import React, {useState, useEffect} from 'react';
import '../App.css';
import Recipe from './Recipe';
import SearchBar from './SearchBar';
  
const Container = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getRecipe = async(keyword) => {
        if(keyword === ''){
            return;
        }
        const res = await fetch('http://localhost:1337/api/recipes', {
        headers: {
            'Accept-Encoding': 'gzip',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            keyword:keyword+""
        })
        });
        const data = await res.json();
        if(data.hits.length === 0){
            window.alert(`No recipes found for ${keyword}. Please try another item.`);
        }else setRecipes(data.hits);    
    };

    const execute = (keyword) => {
        setSearchTerm(keyword);
        console.log(keyword);
    };

    useEffect(()=>{
        getRecipe(searchTerm);
    }, [searchTerm]);

    return(
        <div className="App">
        <SearchBar id="recipeSearch" parentCallBack={execute}/>
        <div className="recipeContainer">
            {recipes.map(recipe => (
            <Recipe
            key={recipe.title+''+ Math.random()}
            title={recipe.title}
            image={recipe.image}
            ingredientLines={recipe.ingredients}
            tags={recipe.tags}
            source={recipe.source}
            url={recipe.url}
            cookingTime={recipe.cookingTime}
            keyword={recipe.keyword}
            />
            ))}
        </div>
        </div>
    );
}
export default Container;
  