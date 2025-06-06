import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Accordion from './Accordian'
import { menuCard } from '../utils/RestaurantApiCalls'



const RestaurantMenu = () => {

  const [menu,setMenu]=useState(null)

  const param= useParams()

  const {resId}=param

  

  const getMenuItems=async(resId)=>{
    const menuData= await menuCard(resId)
    setMenu(menuData?.data)
  }
  
  useEffect(()=>{
    getMenuItems(resId)
  },[])

  console.log('menu state -->',menu)
  
  if(menu===null){
    return (
      <div className='shimmerParent'>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="shimmerUI"></div>
        ))}
      </div>
    )
  }

  return (
    <>
    <h1>{menu?.cards[0]?.card?.card?.text}</h1>
    <p>{menu?.cards[2].card.card.info.cuisines.join(', ')}</p>
    <Accordion menu={menu}/>
    </>
  )
}

export default RestaurantMenu