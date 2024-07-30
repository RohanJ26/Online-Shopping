import React from "react"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import { Outlet } from "react-router-dom"
import Cart from "../Cart/Cart"

const Layout=()=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
            <Cart/>
        </div>
    )
}
export default Layout