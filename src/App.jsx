import './App.css'
import Home from './components/Front_View/Home'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Click_Outer_Components from './Routing/Outer_Components'
import Your_Cart from './Cart/Your_Cart'
import Layout from './components/Layout/layout'
import Final_Page from './components/Final_Page/Final_Page'
import Layout2 from './components/Layout/layout2'


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/laptop' element={<Click_Outer_Components type={"laptop"}/>}></Route>
      <Route path='/phone' element={<Click_Outer_Components type={"phone"}/>}></Route>
      <Route path='/earphone' element={<Click_Outer_Components type={"earphone"}/>}></Route>
      <Route path='/watch' element={<Click_Outer_Components type={"watch"}/>}></Route>
      <Route path='/electric kettle' element={<Click_Outer_Components type={"electric kettle"}/>}></Route>
      <Route path='/cart' element={<Your_Cart/>}></Route>
    </Route>
    <Route path='/' element={<Layout2/>}>
      <Route path='/Order_Completed' element={<Final_Page/>}></Route>
      </Route>
    </>
  )
)

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <RouterProvider router={router}/>
      </div>
    </>
  )
}


export default App