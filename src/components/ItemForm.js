import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })

  function handleFormChange(e){
    // const name = e.target.name
    // const value = e.target.value
    const {name, value} = e.target

    setFormData(formData => ({...formData, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()

    onItemFormSubmit({...formData, id: uuid()})
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
