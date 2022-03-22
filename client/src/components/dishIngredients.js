import React from "react"

function dishIngredients(props) {
  const { dish, isChef } = props

  function deleteButton() {
    return (
      isChef ? <button className="ingredient-delete">X</button> : null
    )
  }


  return (
    // console.log(dish),
    <section>
      <h2>Ingredients</h2>
      {dish.ingredients.map(item => {
        return (
          <div key={item} className="ingredient-container">
            <div>
              <input type="checkbox" />
              <input type="text" value={item} disabled="disabled" />
              {deleteButton()}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default dishIngredients