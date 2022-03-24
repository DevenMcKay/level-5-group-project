import React from "react"
import modLogo from "./images/modLogo.png"
import { Link } from "react-router-dom"

export default function Nav(props) {
  const {setIsEdit, isEdit} = props
  return (
    console.log(isEdit),
    <nav>
      <Link to={"/"} onClick={()=>setIsEdit(false)}>
        <img src={modLogo} className="header" alt="Los Pollo Logo"></img>
      </Link>
      <div>
        <Link to={"/"} onClick={()=>setIsEdit(false)}>
          <button>User</button>
        </Link>
        <Link to={"/search"}>
          <button>Search</button>
        </Link>
      </div>
    </nav>
  )
}