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

  const textChange = (e) => {
    const { id, name, value } = e.target
    const newArray = updatedDish[`${name}`].map((item, index) => {
      if (id == index) {
        return value
      }
      return item
    })
    setUpdatedDish(prevInput => ({ ...prevInput, [name]: newArray }))
  }

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
    // console.log(updatedDish)
    if (updatedDish[name] === undefined) {
      return setUpdatedDish(prevInput => ({ ...prevInput, [name]: [""] }))
    } else {
      setUpdatedDish(prevInput => ({ ...prevInput, [name]: [...prevInput[name], [""]] }))
    }
  }

  return (
    console.log('✅', updatedDish),
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
        addItem={(e) => addItem(e)}
        textChange={(e) => textChange(e)} />
      <DishSteps
        dish={updatedDish}
        isChef={isChef}
        isEdit={isEdit}
        deleteItem={(e) => deleteItem(e)}
        addItem={(e) => addItem(e)}
        textChange={(e) => textChange(e)} />
      {chefEditButtons()}
    </div>
  )
}

export default Dish