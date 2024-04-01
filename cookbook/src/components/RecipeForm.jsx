// RecipeForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RecipeForm() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    image: '',
    ingredients: '',
    preparation: '',
    author: '',
    published: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setRecipe(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3001/recipes', recipe)
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={recipe.name} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={recipe.image} onChange={handleChange} />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} />
        </div>
        <div>
          <label>Preparation Method:</label>
          <textarea name="preparation" value={recipe.preparation} onChange={handleChange} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={recipe.author} onChange={handleChange} />
        </div>
        <div>
          <label>Published:</label>
          <input type="text" name="published" value={recipe.published} onChange={handleChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default RecipeForm;
