import React from "react"
import DishSummary from "./components/DishSummary"
import { Link } from "react-router-dom"

function Search(props) {
  const { dishes, isChef } = props

  function welcome() {
    return (isChef ?
      <h1>Welcome Chef!</h1> :
      <h1>Welcome Cook!</h1>)
  }

  return (
    console.log(props),

    <div className="search">
      {welcome()}
      <form className="search-bar">
        <input type="text" placeholder="Type to search..." ></input>
        <input type="submit" value="Search"></input>
      </form>
      {dishes ? <>
        {dishes.map(dish =>
          <Link to="/dish">
            <DishSummary key={dish._id} dish={dish} isChef={isChef} />
          </Link>)}
      </> : null}
    </div>
  )
}

export default Search