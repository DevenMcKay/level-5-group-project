import './App.css';
import axios from "axios"
import React, { useEffect, useState } from "react"
import Home from "./Home"
import Search from "./Search"
import Dish from "./Dish"
import { Routes, Route } from "react-router-dom"
import Error from "./components/Error"
import Nav from "./components/Nav"
import staticData from "./components/staticData"
import blankDish from "./components/dishBlank"


function App() {
  const [dishes, setDishes] = useState(staticData)
  const [isBlankDish, setIsBlankDish] = useState(false)
  const [isChef, setIsChef] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [dishMessage, setDishMessage] = useState(null)

  // DEFAULT DISH ON DISH PAGE
  const [selectDish, setSelectDish] = useState(dishes[0])

  useEffect(() => {
    // axios.get({staticData})
    //   .then(res => setDishes(res.data))
    //   .catch(err => console.log(err))
  }, [])

  // ALLOW INDIVIDUAL MAP WHEN DISH IS SELECTED 
  function clickedDish(id) {
    dishes.filter(item => {
      if (item._id === id) {
        return (setSelectDish(item))
      }
    })
  }

  function deleteDish(_id) {
    const newArr = dishes.filter(dish => {
      if (_id !== dish._id) {
        return dish
      }
    })
    setDishes(newArr)
  }

  function addDish(updatedDish) {
    setDishes(prevInput => [...prevInput, updatedDish])
  }

  function updateDish(id, updatedDish) {
    const newArr = dishes.map(dish => {
      if (dish._id === id) {
        return updatedDish
      }
      return dish
    })
    setDishes(newArr)
  }

  return (
    <>
      <Nav isEdit={isEdit} setIsEdit={setIsEdit} />
      <div className='background-image'>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setIsChef={setIsChef} />} />
          <Route
            path="/search"
            element={
              <Search
                dishes={dishes}
                isChef={isChef}
                isEdit={isEdit}
                setIsEdit={() => setIsEdit(true)}
                clickedDish={(id) => {return (clickedDish(id), setDishMessage(null))}}
                setIsBlankDish={() => setIsBlankDish(true)}
                dishMessage={dishMessage}
                setDishMessage={setDishMessage}
              />} />
          <Route
            path="/dish"
            element={
              <Dish
                setIsBlankDish={() => setIsBlankDish(false)}
                deleteDish={(_id) => deleteDish(_id)}
                dish={selectDish}
                isChef={isChef}
                isEdit={isEdit}
                setIsEdit={() => setIsEdit(!isEdit)}
                updateDish={(id, updatedDish) => updateDish(id, updatedDish)}
                setDishMessage={setDishMessage}
              />} />
          <Route
            path="/dishform"
            element={
              <Dish
              isBlankDish={isBlankDish}
              setIsBlankDish={() => setIsBlankDish(false)}
              addDish={(updatedDish) => addDish(updatedDish)}
              dish={blankDish}
              isChef={isChef}
              isEdit={isEdit}
              setIsEdit={() => setIsEdit(!isEdit)}
              setDishMessage={setDishMessage}
              />} />
          <Route
            path="*"
            element={(
              <><Error /><Home /></>)} />
        </Routes>
      </div>
    </>
  )
}

export default App
