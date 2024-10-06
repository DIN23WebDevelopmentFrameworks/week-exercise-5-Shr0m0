import React from 'react';
import Recipe from './Recipe';
import { IRecipe } from './types';

interface IRecipeListProps {
    recipes: IRecipe[];
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
    return (
        <div>
            <h2>Recipes</h2>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipeData={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
