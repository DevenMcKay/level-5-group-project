import React from "react"

function DishSummary(props) {
  const { dish, isChef } = props

  function chefButtons() {
    return (isChef ?
      <div className="summary-button-container">
        <button>&nbsp;&nbsp;Edit&nbsp;&nbsp;</button>
        <button>Delete</button></div> : null)
  }

  return (
    <section className="dish-summary">
      <img src={dish.image} alt={dish.name}></img>
      <div className="dish-summary-text">
        <h1>{dish.name}</h1>
        <p>{dish.summary}</p>
        {/* {chefButtons()} */}
      </div>
    </section>
  )
}

export default DishSummary