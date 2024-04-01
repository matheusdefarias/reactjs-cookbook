// RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} />
        <h3>{recipe.name}</h3>
      </Link>
    </div>
  );
};

export default RecipeCard;
