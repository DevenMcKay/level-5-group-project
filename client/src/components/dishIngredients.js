import React from "react"

function dishIngredients(props) {
  const { dish, isChef, isEdit, handleChange, deleteItem, addItem } = props

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
      {dish.ingredients.map((item, index) => {
        return (
          <div key={`${item}${index}`} className="ingredient-container"  >
            <div>
              <input type="checkbox" />
              <input
                name={`ingredients${index}`}
                id={index}
                index={index}
                type="text"
                value={item}
                disabled={!isEdit}
                onChange={(e) => handleChange(e)} />
              {deleteButton(index)}
            </div>
          </div>
        )
      })}
      <div className="ingredient-add">
        {addButton()}
      </div>
    </section>
  )
}

export default dishIngredients