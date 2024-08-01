import React from "react"
import product_list from "../Products/products"
import { change_number_add } from "./Cart";
import { Cart_items } from "../Products/products";

const keyCount=[]
const map1=new Map()
const Click_add_to_cart=(id)=>{
    product_list.forEach((item)=>{
        if(item.id===id){
            if(keyCount.includes(item.id)==false){
                Cart_items.push(
                    <div key={item.id}>{item}</div>
                )
                map1.set(item.id,1)
                keyCount.push(item.id)
            }
            else{
                const val=map1.get(item.id)
                map1.set(item.id,val+1)
            }
        }
    })
    change_number_add()
}

export default Click_add_to_cart
export {map1}