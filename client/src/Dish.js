import React, { useState } from "react"
import { Link } from "react-router-dom"
import DishSummary from "./components/dishSummary"
import DishIngredients from "./components/dishIngredients"
import DishSteps from "./components/dishSteps"

function Dish(props) {
  const { dish, isChef, isEdit, setIsEdit } = props
  const { updatedDish, setUpdatedDish } = useState(dish)

  function chefEditButtons() {
    const buttonText = () => {
      return isEdit ? "Save" : "Edit"
    }
    return (isChef ?
      <button onClick={() => setIsEdit()}>{buttonText()}</button> : null)
  }

  function handleChange(e) {
    const { name, value } = e.target
    console.log("name:", [name], "value:", value)
    // setUpdatedDish(prevInput => ({ ...prevInput, [name]: value }))
  }

  return (
    <div className="dish">
      {chefEditButtons()}
      <DishSummary
        dish={dish}
        isChef={isChef}
        isEdit={isEdit}
        handleChange={(e) => handleChange(e)} />
      <DishIngredients
        dish={dish}
        isChef={isChef}
        isEdit={isEdit}
        handleChange={(e, index) => handleChange(e, index)} />
      <DishSteps
        dish={dish}
        isChef={isChef}
        isEdit={isEdit}
        handleChange={(e, index) => handleChange(e, index)} />
      {chefEditButtons()}
    </div>
  )
}

export default Dish