import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  const initialFormState ={
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState({...initialFormState});
  
  function resetForm(){
   setFormData(initialFormState)
  }
  
 const updateRecipeState = (name, inputData) => {
   const newFormData = {...formData, [name]: inputData} 
   setFormData(newFormData) 
  console.log(newFormData);
 }
  
 const onSubmit = (event) => {
   event.preventDefault();
  
   setRecipes([...recipes, formData])
   resetForm()
 }
  

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr>
           <th>Name</th>
           <th>Cuisine</th> 
           <th>Photo</th>
           <th>Ingredients</th>
           <th>Preparation</th>
           <th>Actions</th>
          </tr>
          <tr>
           <td>
            <input
             type="text"
             placeholder="name"
             onChange={(e) => updateRecipeState("name", e.target.value)}
             value={formData.name}
             name="name"
              />
            </td>
            <td>
            <input
              type="text"
              placeholder="cuisine"
              onChange={(e)=>updateRecipeState("cuisine", e.target.value)}
              value={formData.cuisine}
              name="cuisine"
              />
             </td>
             <td>
              <input
                type="text"
                placeHolder="URL"
                onChange={(e)=>updateRecipeState("photo", e.target.value)}
                value={formData.photo}
                name="photo"
                />
            </td>
            <td>
              <textarea
                type="text"
                placeHolder="ingredients"
                onChange={(e)=>updateRecipeState("ingredients", e.target.value)}
                value={formData.ingredients}
                name="ingredients"
                ></textarea>
            </td>
            <td>
              <textarea
                type="text"
                placeHolder="preparation"
                onChange={(e)=>updateRecipeState("preparation", e.target.value)}
                value={formData.preparation}
                required
                name= "preparation"
                ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
