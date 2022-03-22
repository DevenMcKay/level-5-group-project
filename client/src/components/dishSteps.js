import React from "react"

function dishSteps(props) {
  const { dish, isChef } = props

  function deleteButton() {
    return (
      isChef ? <button>X</button> : null
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
              <textarea type="text" value={item} disabled="disabled" />
              {deleteButton()}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default dishSteps