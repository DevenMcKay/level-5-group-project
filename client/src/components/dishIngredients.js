import React from "react"

function dishIngredients(props) {
  const { dish, isChef, isEdit, handleChange } = props

  function deleteButton() {
    return (
      (isChef && isEdit) ? <button className="ingredient-delete">X</button> : null
    )
  }

  return (
    console.log('✅', props),
    <section>
      <h2>Ingredients</h2>
      {dish.ingredients.map(item => {
        return (
          <div key={item} className="ingredient-container">
            <div>
              <input type="checkbox" />
              <input
                name="ingredients"
                type="text"
                value={item}
                disabled={!isEdit}
                onChange={(e) => handleChange(e)} />
              {deleteButton()}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default dishIngredients