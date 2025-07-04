import React from 'react'
import './App.css'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import axios from 'axios'
import Addfoodrecipe from './pages/Addfoodrecipe'
import EditRecipe from './pages/EditRecipe'


const getAllRecipe=async ()=>{
 let allrecipe=[]
 await axios.get('http://localhost:3030').then(res=>{
  allrecipe=res.data
 })
return allrecipe;

}

const getMyRecipe=async()=>{
  let user=JSON.parse(localStorage.getItem("user"))
  let allRecipe=await getAllRecipe()
  return allRecipe.filter(item=>item.createdBy===user._id)

}

const getFavRecipes=()=>{
  return JSON.parse(localStorage.getItem("fav"))
}




const router=createBrowserRouter([
  {path:'/',element:<MainNavigation/>,children:[
    {path:'/',element:<Home/>,loader:getAllRecipe},
    {path:'/myRecipe',element:<Home/>,loader:getMyRecipe},
    {path:'/favRecipe',element:<Home/>,loader:getFavRecipes},
    {path:'/addRecipe',element:<Addfoodrecipe/>},
    {path:'/editRecipe/:id',element:<EditRecipe/>},
      // {path:"/recipe/:id",element:<RecipeDetails/>,loader:getRecipe}
  ]}
  
])


export default function App() {
  return (
    <>
    
    <RouterProvider router={router}/>

    </>
  )
}
