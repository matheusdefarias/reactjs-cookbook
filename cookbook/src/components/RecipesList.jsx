// RecipesList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RecipesList.css'; // Importando o arquivo de estilos CSS

function RecipesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <div className="recipe-list"> {/* Adicionando a classe recipe-list */}
        {recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
            <div className="recipe-card"> {/* Adicionando a classe recipe-card */}
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <h3>{recipe.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}

export default RecipesList;
