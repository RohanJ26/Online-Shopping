import React from "react"
import product_list from "../Products/products"

const Home=()=>{

    const map=[]
    const outer_components=[];
    product_list.forEach((prev)=>{
        if(map.includes(prev.type)===false){
            outer_components.push(
                <div className="transform transition-all duration-300 hover:scale-105" key={prev.id}>{prev.Upper_Components()}</div>
            )
            map.push(prev.type)
        }
    })

    return(
        <>
        <div className="flex flex-wrap mb-4 lg:mb-9 mt-9 gap-5 justify-center items-center flex-1">
            {outer_components}
        </div>
        </>
    )
}

export default Home
