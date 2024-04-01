// RecipeDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetails.css'; // Importando o arquivo de estilos CSS

function RecipeDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/recipes/${id}`)
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-card"> {/* Adicionando a classe recipe-card */}
      <h2>{recipe.name}</h2>
      <div>
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      </div>
      <div>
        <h3>Ingredients:</h3>
        <p>{recipe.ingredients}</p>
      </div>
      <div>
        <h3>Preparation Method:</h3>
        <p>{recipe.preparation}</p>
      </div>
      <div>
        <p>Published: {recipe.published}</p>
        <p>Author: {recipe.author}</p>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/edit/${id}`}>
          <button>Edit</button>
        </Link>
        <Link to="/">
          <button>Return to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetails;
