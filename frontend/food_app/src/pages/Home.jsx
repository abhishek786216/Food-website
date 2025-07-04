import React, { useState } from 'react'
import RecipeImage from '../assets/foodRecipe.png'
import Footer from '../components/footer'
import Recipeitem from '../components/Recipeitem'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import Inputform from '../components/inputform'
import './home.css'
export default function Home() {
const [isOpen,setIsOpen]=useState(false)
  const navigate=useNavigate();
  const  addRecipe=()=>{
    let token=localStorage.getItem('token')
    if(token)
    navigate("/addRecipe")
  else{
    setIsOpen(true)
  }
  }

  return (
    <>


   
   
    <section className='home'>
    <div className='left'>
    <h1>Food Recipe</h1>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio, est rem a quaerat optio repellendus itaque vel dolorum facilis ratione, tenetur perferendis laborum deleniti sunt soluta beatae, expedita mollitia.</h5>
    <button onClick={addRecipe} >Share your recipe</button>
    
    </div>
    <div className="right">
    <img src={RecipeImage} width='320px' height='300px' alt="" />
    
    </div>
    </section>


    <div className='bg'>
    

    </div>
{ (isOpen) &&<Modal onClose={()=>setIsOpen(false)}>
      <Inputform setIsOpen={()=>setIsOpen(false)}/></Modal>}
<div className='recipe'>
  <Recipeitem></Recipeitem>
</div>

</>

  )
}
