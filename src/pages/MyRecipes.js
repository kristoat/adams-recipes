import React from 'react';
import RecipeList from '../components/RecipeList/RecipeList.js';

const MyRecipes = (props) => (
  <div>
    <h1>Oppskrifter</h1>
    <RecipeList
      recipes={[
        'Recipe 1',
        'Recipe 2',
        'Recipe 3',
      ]}
    />
  </div>
);

export default MyRecipes;