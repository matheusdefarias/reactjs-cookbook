// RecipeEdit.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importando useNavigate
import axios from 'axios';

function RecipeEdit() {
  const navigate = useNavigate(); // Utilizando useNavigate
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    name: '',
    image: '',
    ingredients: '',
    preparation: '',
    author: '',
    published: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setRecipe(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:3001/recipes/${id}`, recipe)
      .then(response => {
        console.log(response.data);
        navigate('/'); // Navegar de volta para a página inicial após a edição
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default RecipeEdit;
