// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipesList from './components/RecipesList';
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import RecipeEdit from './components/RecipeEdit';
import './App.css'; // Importando o arquivo de estilos CSS

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navigation-menu"> {/* Adicionando o menu de navegação */}
          <Link to="/">Home</Link>
          <Link to="/add">Add Recipe</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RecipesList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<RecipeForm />} />
          <Route path="/edit/:id" element={<RecipeEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
