import React from "react"

function dishSteps(props) {
  const { dish, isChef, isEdit, deleteItem, addItem, handleChange, textChange } = props

  function deleteButton(index) {
    return (
      (isChef && isEdit) ? <button name="steps" id={index} onClick={(e) => deleteItem(e)}>X</button> : null)
  }

  function addButton() {
    return (
      (isChef && isEdit) ? <button name="steps" onClick={(e) => addItem(e)}>Add Step</button> : null)
  }

  // KEEPS CARET AT END OF TEXT IN TEXTAREA WHEN TYPING
  function moveCaretAtEnd(e) {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }


  return (
    <section>
      <h2>Steps</h2>
      {dish.steps.map((item, index) => {
        return (
          <div key={`${item}${index}`} className="steps-container">
            <div>
              <h3>{`${index+1}.`}</h3>
              <input type="checkbox" />
              <textarea
                // FORCES CARET TO REMAIN IN PLACE FOR TYPING EACH LETTER AFTER RENDER
                autoFocus
                onFocus={moveCaretAtEnd}
                id={index}
                name="steps"
                type="text"
                index={index}
                value={item}
                disabled={!isEdit}
                onChange={(e) => textChange(e)} />
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