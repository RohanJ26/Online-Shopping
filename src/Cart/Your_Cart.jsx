import React, { useState } from "react";
import {Cart_items} from "../Products/products"
import { change_number_subtract } from "./Cart";
import { NavLink } from "react-router-dom";

let Click_remove_from_cart

const Your_Cart=()=>{
    const initial_cart=[]
    Cart_items.forEach(element => {
        initial_cart.push(
            <div key={element.key}>{element.props.children.In_Cart_Components()}</div>
        )
    })
    const [ItemsOfCart,SetItemsOfCart]=useState(initial_cart);

    Click_remove_from_cart=(id)=>{
        const a= Cart_items.filter((prev)=>(Number(prev.key)!==Number(id)))
        Cart_items.length = 0
        Cart_items.push(...a)
        const arr=[]
        Cart_items.forEach(element => {
            arr.push(
                <div key={element.key}>{element.props.children.In_Cart_Components()}</div>
            )
        })
        SetItemsOfCart(arr)
        change_number_subtract()
    }

    let TotalAmount=0
    return(
        <div className="flex-1 mx-5">
            {Cart_items.length===0 ?
            <div className="m-5 flex flex-col items-center gap-20">
                <div className="text-3xl">
                    Your Cart is empty !!
                </div>
                <img className="h-40" src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="" />
            </div> 
            :
            <>
            
            <div className="flex flex-wrap mb-4 lg:mb-9 mt-9 gap-5 items-center flex-1 mx-10">
                {ItemsOfCart}
            </div>
            <div className="bg-gray-300 p-3 fixed right-5 top-56 rounded-lg flex flex-col gap-3 items-center">
                    <div className="font-bold text-3xl">Place Order</div>
                    <div className="lg:text-2xl">Total Amount to be Paid: </div>
                    {Cart_items.forEach(element => {
                        TotalAmount+= Number(element.props.children.price)
                    })}
                    <div className="lg:text-xl">&#8377;{Number(TotalAmount).toLocaleString('en-IN')}</div>
                    <NavLink to={"/Order_Completed"}>
                        <button className="p-1 px-3 bg-orange-500 text-white rounded-lg">Click to Pay</button>
                    </NavLink>
            </div>
            </>
            }
        </div>
    )
}
export{ Cart_items}
export {Click_remove_from_cart}
export default Your_Cart



