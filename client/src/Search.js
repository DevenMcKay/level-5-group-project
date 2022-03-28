import React, { useState } from "react"
import DishSummary from "./components/dishSummary"
import { Link } from "react-router-dom"

function Search(props) {
  const { dishes, isChef, clickedDish, setIsEdit, setIsBlankDish, dishMessage, setDishMessage } = props
  const [searchInput, setSearchInput] = useState("")
  const [filteredDishes, setFilteredDishes] = useState(dishes)


  function welcome() {
    return (isChef ?
      <h1>Welcome Chef!</h1> :
      <h1>Welcome Cook!</h1>)
  }

  function displayMessage() {
    if (dishMessage === "add") {
      return (<h2>Dish Added!</h2>)
    } else if (dishMessage === "delete") {
      return (<h2>Dish Deleted!</h2>)
    } else if (dishMessage === "edit") {
      return (<h2>Dish Edited!</h2>)
    } else {
      return null
    }
  }

  function listDishes() {
    return (filteredDishes ? <>
      {filteredDishes.map(dish =>
        <Link
          to="/dish"
          key={dish._id}
          onClick={() => { return (clickedDish(dish._id), setDishMessage(null)) }}>
          <DishSummary dish={dish} />
        </Link>)}
    </> : null)
  }

  // SEARCH BAR FILTER FUNCTION 
  const filter = (e) => {
    const keyword = e.target.value
    if (keyword !== "") {
      const results = dishes.filter(dish => {
        return dish.name.toLowerCase().includes(keyword.toLowerCase())
      })
      setFilteredDishes(results)
    } else {
      setFilteredDishes(dishes)
    }
    setSearchInput(keyword)
  }

  // ADD BUTTON TO BLANK FORM
  function chefButtons(dishes) {
    return (isChef ?
      <Link to="/dishform">
        <button onClick={() => {
          return (
            setIsEdit(true), setIsBlankDish(), setDishMessage(null))
        }}
        >ADD DISH</button>
      </Link>
      : null)
  }

  return (
    console.log(dishMessage),
    <div className="search">
      {welcome()}
      {displayMessage()}
      <form className="search-bar">
        <input
          type="search"
          placeholder="Search dish title..."
          value={searchInput}
          onChange={filter}>
        </input>
      </form>
      {listDishes()}
      {chefButtons(dishes)}
    </div>
  )
}

export default Search