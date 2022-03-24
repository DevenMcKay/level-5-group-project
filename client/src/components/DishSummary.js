import React, { useState } from "react"

function DishSummary(props) {
  const { dish, isChef, isEdit, handleChange } = props


  function chefButtons() {
    return (isChef ?
      <></> : null)
  }

  function imageUrlInput() {
    return (isChef && isEdit ?
      <textarea
        name="image"
        placeholder="Image URL"
        value={dish.image}
        onChange={(e) => handleChange(e)}
        disabled={false}
        className="summary-img-url"
      ></textarea> : null)
  }


  return (
    <section className="dish-summary">
      <div className="dish-summary-image">
        <img src={dish.image} alt={dish.name}></img>
      </div>
      <div className="dish-summary-text">
        {imageUrlInput()}
        <input
          disabled={!isEdit}
          type="text"
          name="name"
          placeholder="Name"
          value={dish.name}
          onChange={(e) => handleChange(e)}
          className="summary-h1"
        ></input>

        <textarea
          disabled={!isEdit}
          name="summary"
          placeholder="Summary"
          value={dish.summary}
          onChange={(e) => handleChange(e)}
          className="summary-p"
        ></textarea>
      </div>
    </section>
  )
}

export default DishSummary