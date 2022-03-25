import React, { useState } from "react"
import { Link } from "react-router-dom"
import DishSummary from "./components/dishSummary"
import DishIngredients from "./components/dishIngredients"
import DishSteps from "./components/dishSteps"

function Dish(props) {
  const { dish, isChef, isEdit, setIsEdit } = props
  const [updatedDish, setUpdatedDish] = useState(dish)

  function chefEditButtons() {
    const buttonText = () => {
      return isEdit ? "Save" : "Edit"
    }
    return (isChef ?
      <button onClick={() => setIsEdit()}>{buttonText()}</button> : null)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setUpdatedDish(prevInput => ({ ...prevInput, [name]: value }))
  }


  // const ingredientChange = (e) => {
  //   const { name, value, id } = e.target
  //   const newItems = updatedDish.ingredients.map((item, index) => {
  //     // console.log(value)
  //     if (id === index) {
  //       // console.log('✅', value)
  //       return item = value
  //     }
  //     return item
  //   })
  //   console.log('✅', newItems)
  //   // setUpdatedDish(prevInput => ({ ...prevInput, newItems}))
  // }


  // function ingredientChange(e) {
  //   const { name, value, id } = e.target
  //   const dishIng = dish.ingredients[id]
  // console.log('✅', name, value, id)
  // const newIng = dishIng[0][id] = value
  //  const newItems = updatedDish.ingredients.map((item, index) => {
  //   if (id === index) {
  //       // console.log('✅', value)
  //       return item = value
  //     }
  //     return item
  //   })
  // console.log('✅', `${dishIng}${value}`)
  // setUpdatedDish(prevInput => ({ ...prevInput, ingredients:  [...prevInput.ingredients, newIng]}))
  //  }

  function deleteItem(e) {
    const { id, name } = e.target
    const newArray = updatedDish[`${name}`].filter((item, index) => {
      if (id != index) {
        return item
      }
    })
    setUpdatedDish(prevInput => ({ ...prevInput, [name]: newArray }))
  }

  function addItem(e) { 
    const { id, name } = e.target
    setUpdatedDish(prevInput => ({ ...prevInput, [name]: [...prevInput[name],[""]] }))
  }

  return (
    // console.log('✅', updatedDish),
    <div className="dish">
      {chefEditButtons()}
      <DishSummary
        dish={updatedDish}
        isChef={isChef}
        isEdit={isEdit}
        handleChange={(e) => handleChange(e)} />
      <DishIngredients
        dish={updatedDish}
        isChef={isChef}
        isEdit={isEdit}
        deleteItem={(e) => deleteItem(e)}
        addItem={(e)=>addItem(e)}
        handleChange={(e) => console.log(e)} />
      <DishSteps
        dish={updatedDish}
        isChef={isChef}
        isEdit={isEdit}
        deleteItem={(e) => deleteItem(e)}
        addItem={(e)=>addItem(e)}
        handleChange={(e, index) => handleChange(e, index)} />
      {chefEditButtons()}
    </div>
  )
}

export default Dish