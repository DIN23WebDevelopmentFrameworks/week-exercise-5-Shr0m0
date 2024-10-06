import React from 'react';
import { IRecipe } from './types';

interface IRecipeProps {
    recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
    return (
        <div className="recipe">
            <h3>{recipeData.name}</h3>
            <img src={recipeData.image} alt={recipeData.name} />
            <h4>Ingredients:</h4>
            <ul>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4>Instructions:</h4>
            <ol>
                {recipeData.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
            <p><strong>Prep Time:</strong> {recipeData.prepTimeMinutes} minutes</p>
            <p><strong>Cook Time:</strong> {recipeData.cookTimeMinutes} minutes</p>
            <p><strong>Servings:</strong> {recipeData.servings}</p>
            <p><strong>Calories:</strong> {recipeData.caloriesPerServing} kcal</p>
            <p><strong>Rating:</strong> {recipeData.rating} ({recipeData.reviewCount} reviews)</p>
        </div>
    );
};

export default Recipe;
