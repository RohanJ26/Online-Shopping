import React from "react"
import product_list from "../Products/products"
import { change_number_add } from "./Cart";
import { Cart_items } from "../Products/products";

const Click_add_to_cart=(id)=>{
    product_list.forEach((item)=>{
        if(item.id===id){
            Cart_items.push(
                <div key={item.id}>{item}</div>
            )
        }
    })
    change_number_add()
}

export default Click_add_to_cart

