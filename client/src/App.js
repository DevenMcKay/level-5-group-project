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


function App() {
  const [dishes, setDishes] = useState(staticData)
  const [isChef, setIsChef] = useState(false)
  const [selectDish, setSelectDish] = useState()

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
    // console.log(selectDish),
    <>
      <Nav />
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
                clickedDish={(id) => clickedDish(id)} />} />
          <Route
            path="/dish"
            element={
              <Dish
                dish={selectDish}
                isChef={isChef} />} />
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
