import React, { useState } from "react";
import { change_number_subtract } from "./Cart";
import { NavLink } from "react-router-dom";
import { CartProvider } from "../CartContext";
import { In_Cart_Components } from "../Products/products";
import { keyCount,map1,cartItem } from "../Routing/Outer_Components";


function Your_Cart() {
    const CartItems=[...cartItem]
    
    const initial_cart=[]
    CartItems.forEach(element => {
        initial_cart.push(
            <tr key={element.key}>
                <td className="border border-slate-600 p-5">
                    {<In_Cart_Components arg={element.props.children}/>}</td>
                <td className="border border-slate-600 p-5 text-center">
                    {map1.get(element.key)}</td>
            </tr>
        )
    })
    const [ItemsOfCart,SetItemsOfCart]=useState(initial_cart);

    const Click_remove_from_cart=(id)=>{
        CartItems.forEach((item)=>{
            if(Number(item.key)===Number(id)){
                if(map1.get(item.key)>1){
                    map1.set(item.key,map1.get(item.key)-1)
                }
                else{
                    let a=cartItem.filter((prev)=>(Number(prev.key)!==Number(id)))
                    cartItem.length=0;
                    cartItem.push(...a)
                    CartItems.length=0;
                    CartItems.push(...cartItem)
                    map1.delete(item.key)
                    let c=keyCount.filter((prev)=>(Number(prev)!==Number(id)))
                    keyCount.length=0
                    keyCount.push(...c)
                }
            }
        })
        const arr=[]
        CartItems.forEach(element => {
            arr.push(
                <tr key={element.key}>
                    <td className="border border-slate-600 p-5">
                        {<In_Cart_Components arg={element.props.children}/>}
                    </td>
                    <td className="border border-slate-600 p-5 text-center">
                    {map1.get(element.key)}</td>
                </tr>
            )
        })
        SetItemsOfCart(arr)
        change_number_subtract()
    }

    let TotalAmount=0
    return(
        <CartProvider value={{CartItems,Click_remove_from_cart}}>
        <div className="flex-1 mx-5">
            {CartItems.length===0 ?
            <div className="m-5 flex flex-col items-center gap-20">
                <div className="text-3xl">
                    Your Cart is empty !!
                </div>
                <img className="h-40" src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="" />
            </div> 
            :
            <>
            
            <div className="flex flex-wrap mb-4 lg:mb-9 mt-9 gap-5 items-center flex-1 mx-5 md:mx-10">
                <table className="border-separate border border-slate-500">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 p-5">Product</th>
                            <th className="border border-slate-600 p-5">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ItemsOfCart}
                    </tbody>
                </table>
            </div>
            <div className="bg-gray-300 p-3 fixed right-5 top-56 rounded-lg flex flex-col gap-3 items-center">
                    <div className="font-bold text-3xl">Place Order</div>
                    <div className="lg:text-2xl">Total Amount to be Paid: </div>
                    {CartItems.forEach(element => {
                        TotalAmount+= Number(element.props.children.price*map1.get(element.key))
                    })}
                    <div className="lg:text-xl">&#8377;{Number(TotalAmount).toLocaleString('en-IN')}</div>
                    <NavLink to={"/Order_Completed"}>
                        <button className="p-1 px-3 bg-orange-500 text-white rounded-lg">Click to Pay</button>
                    </NavLink>
            </div>
            </>
            }
        </div>
        </CartProvider>
    )
}
export default Your_Cart
