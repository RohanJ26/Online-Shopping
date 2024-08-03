import Cart from "../Cart/Cart";
import product_list from "../Products/products";
import { Lower_Components } from "../Products/products";
import { CartProvider } from "../CartContext";
import { useState } from "react";
import { change_number_add } from "../Cart/Cart";

const keyCount=[]
const map1=new Map()
const cartItem=[]
const Click_Outer_Components=({type})=>{

    const Click_add_to_cart=(id)=>{
        product_list.forEach((item)=>{
            if(item.id===id){
                if(keyCount.includes(item.id)==false){
                    cartItem.push(<div key={item.id}>{item}</div>)
                    map1.set(item.id,1)
                    keyCount.push(item.id)
                }
                else{
                    map1.set(item.id,map1.get(item.id)+1)
                }
            }
        })
        change_number_add()
    }


    const components=[];
    product_list.forEach((prev)=>{
        if(prev.type===type){
            components.push(
                <div key={prev.id}>{<Lower_Components arg={prev}/>}</div>
            )
        }
    })
    

    return(
        <CartProvider value={{Click_add_to_cart}}>
        <div className="flex flex-wrap mb-4 lg:mb-9 mt-9 gap-5 justify-center items-center flex-1">
            {components}
            
        </div>
        </CartProvider>
    )
}

export default Click_Outer_Components
export {keyCount,map1,cartItem}