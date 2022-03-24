import React from "react"

function dishSteps(props) {
  const { dish, isChef, isEdit, handleChange } = props

  function deleteButton() {
    return (
      (isChef && isEdit) ? <button>X</button> : null
    )
  }

  return (
    // console.log(dish),
    <section>
      <h2>Steps</h2>
      {dish.steps.map(item => {
        return (
          <div key={item} className="steps-container">
            <div>
              <input type="checkbox" />
              <textarea
                name="steps"
                type="text"
                value={item}
                disabled={!isEdit}
                onChange={(e) => console.log('✅', e)} />
              {deleteButton()}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default dishSteps