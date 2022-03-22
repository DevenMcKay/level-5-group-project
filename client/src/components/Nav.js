import React from "react"
import modLogo from "./images/modLogo.png"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <Link to={"/"}>
        <img src={modLogo} className="header" alt="Los Pollo Logo"></img>
      </Link>
      <div>
        <Link to={"/"}>
          <button>User</button>
        </Link>
        <Link to={"/search"}>
          <button>Search</button>
        </Link>
      </div>
    </nav>
  )
}