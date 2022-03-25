import './App.css';
import React, { useEffect, useState } from "react"
import Nav from "./components/Nav"
import Home from "./Home"
import Search from "./Search"
import Dish from "./Dish"
import { Routes, Route } from "react-router-dom"
import Error from "./components/Error"
import axios from "axios"
import staticData from "./components/staticData"
import blankDish from "./components/dishBlank"


function App() {
  const [dishes, setDishes] = useState(staticData)
  const [isChef, setIsChef] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  
  // DEFAULT DISH ON DISH PAGE
  const [selectDish, setSelectDish] = useState(dishes[0])

  useEffect(() => {
    // axios.get({staticData})
    //   .then(res => setDishes(res.data))
    //   .catch(err => console.log(err))
  }, [])

  function clickedDish(id) {
    dishes.filter(item => {
      if (item._id === id) {
        return (setSelectDish(item))
      }
    })
  }

  return (
    <>
      <Nav isEdit={isEdit} setIsEdit={setIsEdit}/>
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
                clickedDish={(id) => clickedDish(id)}
              />} />
          <Route
            path="/dish"
            element={
              <Dish
                dish={selectDish}
                isChef={isChef}
                isEdit={isEdit}
                setIsEdit={() => setIsEdit(!isEdit)}
              />} />
              <Route
            path="/dishform"
            element={
              <Dish
                dish={blankDish}
                isChef={isChef}
                isEdit={isEdit}
                setIsEdit={() => setIsEdit(!isEdit)}
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
