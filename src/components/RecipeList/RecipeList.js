import React, { Component } from 'react';
import './RecipeList.css';

class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      selectedRecipe: '',
    };
  }

  onSelectRecipe = (selectedRecipe) => this.setState({ selectedRecipe });

  render() {
    return (
      <div>
        <ul className="recipe-list">
          {this.props.recipes.map(recipe => (
            <li className="recipe-item" key={recipe} onClick={() => this.onSelectRecipe(recipe)}>
              {recipe}
            </li>
          ))}
        </ul>
        <div className="divider" />
        <h1>{this.state.selectedRecipe}</h1>
        {this.state.selectedRecipe !== '' ? <h2>Bla bla bla... </h2> : ''}
      </div>
    );
  }
}

export default RecipeList;