import React from "react"

function dishIngredients(props) {
  const { dish, isChef, isEdit, deleteItem, addItem, textChange } = props

  function deleteButton(index) {
    return (
      (isChef && isEdit) ? <button name="ingredients" id={index} onClick={(e) => deleteItem(e)}>X</button> : null)
  }
  function addButton() {
    return (
      (isChef && isEdit) ? <button name="ingredients" className="ingredient-add" onClick={(e)=>addItem(e)}>Add Ingredient</button> : null)
  }

  return (
    <section>
      <h2>Ingredients</h2>
      { dish.ingredients ? dish.ingredients.map((item, index) => {
        return (
          <div key={`${item}${index}`} className="ingredient-container"  >
            <div>
              <input type="checkbox" />
              <input
                autoFocus
                name={`ingredients`}
                id={index}
                index={index}
                type="text"
                value={item}
                disabled={!isEdit}
                onChange={(e) => textChange(e)} />
              {deleteButton(index)}
            </div>
          </div>
        )
      }) : null}
      <div className="ingredient-add">
        {addButton()}
      </div>
    </section>
  )
}

export default dishIngredients