const { v4: uuidv4 } = require('uuid')

const blankDish = [
  {
    name: "",
    image: "",
    summary: "",
    ingredients: [],
    steps: [],
    _id: uuidv4()
  }
]

export default blankDish