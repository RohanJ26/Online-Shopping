import Cart from "../Cart/Cart";
import product_list from "../Products/products";

const Click_Outer_Components=({type})=>{
    const components=[];
    product_list.forEach((prev)=>{
        if(prev.type===type){
            components.push(
                <div key={prev.id}>{prev.Lower_Components()}</div>
            )
        }
    })

    return(
        <>
        <div className="flex flex-wrap mb-4 lg:mb-9 mt-9 gap-5 justify-center items-center flex-1">
            {components}
        </div>
        </>
    )
}

export default Click_Outer_Components