import React from "react"
import items from "./items"
import {NavLink} from "react-router-dom"
import { useCart } from "../CartContext"

export class Products{
    constructor(id,img,type,brand,price,stock){
        this.id=id
        this.img=img
        this.type=type
        this.brand=brand
        this.price=price
        this.stock=stock
    }
    Upper_Components(){
        return(
            <>
            <NavLink to={`/${this.type}`}>
                <div className="flex flex-col h-auto w-auto border-[1px] border-black rounded-xl overflow-hidden items-center gap-1">
                    <img className="h-40 w-36" src={this.img} alt="" />
                    <p className="py-1 font-semibold uppercase">{this.type}</p>
                </div>
            </NavLink>
            </>
        )
    }
}

const Lower_Components=({arg})=>{
    const {Click_add_to_cart}=useCart()
    return(
        <div className="flex flex-col md:flex-row lg:flex-row text-center h-auto w-auto border-[1px] border-black rounded-xl overflow-hidden justify-center items-center">
            <img className="h-48 w-48" src={arg.img} alt="" />
            <div className="p-3 flex flex-col gap-2">
                <p className="uppercase font-semibold">{arg.type}</p>
                <p className="uppercase">{arg.brand}</p>
                <p>&#8377;{Number(arg.price).toLocaleString('en-IN')}</p>
                <div className="font-semibold">
                    {Number(arg.stock)>3 ? <p className="text-green-600">In Stock</p>:<p className="text-red-600"> Only {arg.stock} Remaining </p>}

                </div>
                <button onClick={()=>(Click_add_to_cart(arg.id))} className="bg-orange-500 px-5 text-white mb-2 rounded-lg transform transition-all duration-300 active:scale-95">Add to Cart</button>
            </div>
        </div>
    )
}

const In_Cart_Components=({arg})=>{
    const {Click_remove_from_cart}=useCart()
    return(
        <div className="flex flex-col md:flex-row lg:flex-row text-center h-auto w-auto border-[1px] border-black rounded-xl overflow-hidden justify-center items-center">
            <img className="h-48 w-48" src={arg.img} alt="" />
            <div className="p-3 flex flex-col gap-2">
                <p className="uppercase font-semibold">{arg.type}</p>
                <p className="uppercase">{arg.brand}</p>
                <p>&#8377;{Number(arg.price).toLocaleString('en-IN')}</p>
                <div className="font-semibold">
                    {Number(arg.stock)>3 ? <p className="text-green-600">In Stock</p>:<p className="text-red-600"> Only {arg.stock} Remaining </p>}
                </div>
                <button onClick={()=>(Click_remove_from_cart(arg.id))} className="bg-red-600 px-5 text-white mb-2 rounded-lg transform transition-all duration-300 active:scale-95">Remove from Cart</button>
            </div>
        </div>
    )
}

const product_list=[]
for(let i=0;i<items.length;i++){
    product_list.push(new Products(items[i].id,items[i].img,items[i].type,items[i].brand,items[i].price,items[i].stock))
}

export default product_list
export {Lower_Components,In_Cart_Components}
