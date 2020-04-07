import React from 'react';
import RecipeTag from './RecipeTag';

const Recipe = ({title, image, ingredientLines, tags, source, url, cookingTime}) => {
    const noOfIng = ingredientLines.length;
    cookingTime = Math.max(cookingTime, Math.ceil(10 + Math.random()*20));
    return(
        <div className="recipe-container">
            <div className="recipe-title-short-desc">
                <span className="recipe-title">{title}</span>
                <br/>
                <div className="recipe-short-desc-container">
                    <span className="recipe-short-desc">
                        Cooking Time: ~{cookingTime} minutes
                    </span>
                    <span className="recipe-short-desc">
                        Recipe: <a href={url}>
                        {source}</a>
                    </span>
                    <span className="recipe-short-desc">
                        Ingredients required: {noOfIng}
                    </span>
                </div>
            </div>
            <br/>
            <div className="centering recipeBox">
                <div className="centering">
                    <img src={image} alt={title}/>
                        <div className="centering tag-container">
                            {tags.map((t) => (
                                <RecipeTag key={t+''+Math.random()} label={t} />
                            ))}
                        </div>
                </div>
                <div className="centering ingredients">
                    <ul className="ingredients-list">
                    {ingredientLines.map((ing) => (
                        <li key={ing+''+Math.random()}>
                            {ing}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Recipe;