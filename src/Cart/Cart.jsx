import React, { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"

let change_number_add
let change_number_subtract
let num=0;
const Cart=()=>{
    const [num_of_products,Set_num_of_products]=useState(num)
    change_number_add=()=>(
        Set_num_of_products((prev)=>(Number.parseInt(prev+1)))
    )
    change_number_subtract=()=>(
        Set_num_of_products((prev)=>(Number.parseInt(prev-1)))   
    )
    num=num_of_products
    return(
        <>  <NavLink to="/cart">
                <div className="fixed top-[11%] right-1 z-50">
                    <img className="h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNBgWnIVVOVNDcapRK86yjdvHRpHumgB7vA&s" alt="" />
                </div>  
            </NavLink>     
            <div className="fixed top-[19%] right-11 z-50">
                <div className="bg-red-600 w-fit px-2 rounded-full text-white">{num_of_products}</div>                
            </div>
        </>
    )
}
export {change_number_add}
export {change_number_subtract}
export default Cart