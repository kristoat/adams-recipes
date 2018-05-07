import React from 'react';
import RecipeList from '../components/RecipeList/RecipeList.js';

const MyRecipes = (props) => (
  <div>
    <h1>Oppskrifter</h1>
    <RecipeList
      recipes={[
        'Burger',
        'Pizza',
        'Taco',
      ]}
    />
  </div>
);

export default MyRecipes;