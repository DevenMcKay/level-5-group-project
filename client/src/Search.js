import React, { useState } from "react"
import DishSummary from "./components/dishSummary"
import { Link } from "react-router-dom"

function Search(props) {
  const { dishes, isChef, clickedDish, setIsEdit, setIsBlankDish } = props
  const [searchInput, setSearchInput] = useState("")
  const [filteredDishes, setFilteredDishes] = useState(dishes)

  function welcome() {
    return (isChef ?
      <h1>Welcome Chef!</h1> :
      <h1>Welcome Cook!</h1>)
  }

  function listDishes() {
    return (filteredDishes ? <>
      {filteredDishes.map(dish =>
        <Link
          to="/dish"
          key={dish._id}
          onClick={() => clickedDish(dish._id)}>
          <DishSummary dish={dish} />
        </Link>)}
    </> : null)
  }

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

  function chefButtons() {
    return (isChef ?
      <Link to="/dishform">
        <button onClick={() =>{return (setIsEdit(true),setIsBlankDish())}}
        >ADD DISH</button>
      </Link>
      : null)
  }

  return (
    <div className="search">
      {welcome()}
      <form className="search-bar">
        <input
          type="search"
          placeholder="Search dish title..."
          value={searchInput}
          onChange={filter}>
        </input>
      </form>
      {listDishes()}
      {chefButtons()}
    </div>
  )
}

export default Search