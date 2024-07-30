import React from "react"
import { NavLink } from "react-router-dom"

const Header= ()=>{
    return(
        <div className="bg-orange-400 flex justify-center items-center p-2 md:px-10 text-white">
            <div className="text-4xl font-semibold">
                <h1>ROHAN'S SHOPPING CENTER</h1>
            </div>
        </div>
    )
}

export default Header