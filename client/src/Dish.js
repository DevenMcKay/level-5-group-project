import React, { useState } from "react"
import { Link } from "react-router-dom"
import DishSummary from "./components/dishSummary"
import DishIngredients from "./components/dishIngredients"
import DishSteps from "./components/dishSteps"
const { v4: uuidv4 } = require('uuid')

function Dish(props) {
  const { dish, isChef, isEdit, setIsEdit, deleteDish, addDish, isBlankDish, setIsBlankDish, updateDish, setDishMessage} = props
  const [updatedDish, setUpdatedDish] = useState(dish)
  const { _id } = updatedDish

  function handleChange(e) {
    const { name, value } = e.target
    setUpdatedDish(prevInput => ({ ...prevInput, [name]: value }))
  }

  // USED FOR TEXT & TEXTAREA INPUTS 
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

  // DELETE STEP & INGREDIENT BUTTONS
  function deleteItem(e) {
    const { id, name } = e.target
    const newArray = updatedDish[`${name}`].filter((item, index) => {
      if (id != index) {
        return item
      }
    })
    setUpdatedDish(prevInput => ({ ...prevInput, [name]: newArray }))
  }

  // ADD STEP & INGREDIENT BUTTONS
  function addItem(e) {
    const { name } = e.target
    if (updatedDish[name] === undefined) {
      return setUpdatedDish(prevInput => ({ ...prevInput, [name]: [""] }))
    } else {
      setUpdatedDish(prevInput => ({ ...prevInput, [name]: [...prevInput[name], [""]] }))
    }
  }

  // BUTTONS AT TOP & BOTTOM OF DISH EDIT PAGES
  function chefEditButtons() {
    const buttonText = () => {
      return isEdit ? "Save" : "Edit"     //CHANGES EDIT BUTTON TEXT
    }
    // NEW DISH BUTTONS
    if (isChef && isEdit && isBlankDish === true) {
      return (
        <Link to="/search">
          <button onClick={() => {
            return (
              setIsEdit(),
              setIsBlankDish(),
              delete updatedDish[0],       // DELETES BLANK DISH
              updatedDish._id = uuidv4(),
              setDishMessage("add"),  // REMOVE: CREATES ID (MONGOOSE WILL DO THIS)
              addDish(updatedDish))
          }}>{buttonText()}</button>
        </Link>)
    // EDIT DISH "SAVE" BUTTON
    } else if (isChef && isEdit) {
      return (
        <Link to="/search">
          <div className="dish-button-container">
            <div>
              <button onClick={() =>{ return (deleteDish(_id),setDishMessage("delete"))}}>DELETE</button>
            </div>
            <button onClick={() => {
              return (setIsEdit(), updateDish(_id, updatedDish), setDishMessage("edit"))
            }}>{buttonText()}</button>
          </div>
        </Link>)
    // EDIT DISH "EDIT" BUTTON
    } else if (isChef) {
      return (
        <button onClick={() => setIsEdit()}>{buttonText()}</button>)
    } else {
    // COOK PAGES
      return null
    }
  }

  return (
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