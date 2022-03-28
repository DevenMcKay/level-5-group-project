import React from "react"
import wideLogo from "./images/modLogo.png"
import { Link } from "react-router-dom"

export default function Nav(props) {
  const { setIsEdit } = props
  
  return (
    <nav>
      <div>
        <Link to={"/search"}>
          <button>Search</button>
        </Link>
      </div>
      <Link to={"/"} onClick={() => setIsEdit(false)}>
        <img src={wideLogo} className="header" alt="Los Pollo Logo"></img>
      </Link>
      <div>
        <Link to={"/"} onClick={() => setIsEdit(false)}>
          <button>User</button>
        </Link>
      </div>
    </nav>
  )
}