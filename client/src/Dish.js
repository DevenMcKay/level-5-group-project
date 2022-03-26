import React, { useState } from "react"
import { Link } from "react-router-dom"
import DishSummary from "./components/dishSummary"
import DishIngredients from "./components/dishIngredients"
import DishSteps from "./components/dishSteps"
const { v4: uuidv4 } = require('uuid')

function Dish(props) {
  const { dish, isChef, isEdit, setIsEdit, deleteDish, addDish, isBlankDish, setIsBlankDish, updateDish } = props
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

  function chefEditButtons() {
    const buttonText = () => {
      return isEdit ? "Save" : "Edit"     //CHANGES EDIT BUTTON TEXT
    }
    if (isChef && isEdit && isBlankDish === true) {
      return (
        <button onClick={() => {
          return (setIsEdit(),
            setIsBlankDish(),
            delete updatedDish[0],       // DELETES BLANK DISH
            updatedDish._id = uuidv4(),  // REMOVE: CREATES ID (MONGOOSE WILL DO THIS)
            addDish(updatedDish)
          )
        }}>{buttonText()}</button>)
    } else if (isChef && isEdit) {
      return (
        <div className="dish-button-container">
          <div>
            <button onClick={() => deleteDish(_id)}>DELETE</button>
          </div>
          <button onClick={() => {
            return (setIsEdit(), updateDish(_id, updatedDish))
          }}>{buttonText()}</button>
        </div>)
    } else if (isChef) {
      return (<button onClick={() => setIsEdit()}>{buttonText()}</button>)
    } else {
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