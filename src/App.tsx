import React, { useEffect, useState } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import { IRecipe } from './types';

const App: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        const fetchTags = async () => {
            const response = await fetch('https://dummyjson.com/recipes/tags');
            const data = await response.json();
            setTags(data);
        };

        fetchTags();
    }, []);

    useEffect(() => {
        if (selectedTag) {
            const fetchRecipes = async () => {
                const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
                const data = await response.json();
                setRecipes(data.recipes);
            };

            fetchRecipes();
        }
    }, [selectedTag]);

    const handleSelectTag = (tagName: string) => {
        setSelectedTag(tagName);
    };

    const handleGoBack = () => {
        setSelectedTag(null);
    };

    return (
        <div>
            <h1>ACME Recipe O'Master</h1>
            {selectedTag ? (
                <>
                    <button onClick={handleGoBack}>Back to Tags</button>
                    <RecipeList recipes={recipes} />
                </>
            ) : (
                <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
            )}
        </div>
    );
};

export default App;
