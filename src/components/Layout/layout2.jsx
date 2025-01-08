import React from "react"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import { Outlet } from "react-router-dom"

const Layout2=()=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout2