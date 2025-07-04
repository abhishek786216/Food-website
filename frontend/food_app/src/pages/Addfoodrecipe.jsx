import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './add.css'

export default function AddFoodRecipe() {
  const [recipeData, setRecipeData] = useState({});
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    const { name, value, files } = e.target;
    let val;

    if (name === 'ingredients') {
      val = value; // Send as raw string; backend will split it
    } else if (name === 'converImage') {
      val = files[0];
    } else {
      val = value;
    }

    setRecipeData(prev => ({ ...prev, [name]: val }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("time", recipeData.time);
    formData.append("instructions", recipeData.instructions);
    formData.append("converImage", recipeData.converImage);
    formData.append("ingredients", recipeData.ingredients); // raw string

    try {
      await axios.post("http://localhost:3030/recipe", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': 'bearer ' + localStorage.getItem("token")
        }
      });
      navigate("/");
    } catch (err) {
      console.error("Error uploading recipe:", err.response?.data || err.message);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onHandleSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input type="text" name="title" onChange={onHandleChange} required />
        </div>

        <div className="form-control">
          <label>Time</label>
          <input type="text" name="time" onChange={onHandleChange} />
        </div>

        <div className="form-control">
          <label>Ingredients (comma separated)</label>
          <textarea name="ingredients" rows="4" onChange={onHandleChange}></textarea>
        </div>

        <div className="form-control">
          <label>Instructions</label>
          <textarea name="instructions" rows="5" onChange={onHandleChange}></textarea>
        </div>

        <div className="form-control">
          <label>Recipe Image</label>
          <input type="file" name="converImage" onChange={onHandleChange} />
        </div>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
