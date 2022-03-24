import React from "react"

function dishSteps(props) {
  const { dish, isChef, isEdit, deleteItem, handleChange } = props

  function deleteButton(index) {
    return (
      (isChef && isEdit) ? <button name="steps" id={index} onClick={(e)=> deleteItem(e)}>X</button> : null)
  }
  function addButton() {
    return (
      (isChef && isEdit) ? <button>Add Step</button> : null)
  }

  return (
    // console.log(dish),
    <section>
      <h2>Steps</h2>
      {dish.steps.map((item, index) => { 
        return (
          <div key={item} className="steps-container">
            <div>
              <input type="checkbox" />
              <textarea
                name="steps"
                type="text"
                index={index}
                value={item}
                disabled={!isEdit}
                onChange={(e) => console.log('✅', e)} />
              {deleteButton(index)}
            </div>
          </div>
        )
      })}
      <div className="steps-add">
        {addButton()}
      </div>
    </section>
  )
}

export default dishSteps