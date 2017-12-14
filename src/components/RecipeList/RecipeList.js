// @flow

import React from 'react';
import './RecipeList.css';

type PropsType = {
  recipes: Array<string>,
};

const RecipeList = (props: PropsType) => (
  <ul className="lul">
    {props.recipes.map(recipe => (
      <li>{recipe}</li>
    ))}
  </ul>
);

export default RecipeList;