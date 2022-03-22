import React from "react"
import { Link } from "react-router-dom"
import DishSummary from "./components/dishSummary"
import DishIngredients from "./components/dishIngredients"
import DishSteps from "./components/dishSteps"

function Dish(props) {

  const { dish, isChef } = props
  return (
    // console.log(props),
    <div className="dish">
      <button>Edit</button>
      <DishSummary dish={dish} isChef={isChef} />
      <DishIngredients dish={dish} isChef={isChef} />
      <DishSteps dish={dish} isChef={isChef} />
      <button>Edit</button>
    </div>
  )
}

export default Dish