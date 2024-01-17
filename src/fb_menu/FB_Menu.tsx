import React, { useEffect, useState } from 'react'
import { food_full_menu } from '../data'
import { drinks_full_menu } from '../data'
import { desserts_full_menu } from '../data'
import FB_Cat from './FB_Cat'
export default function FB_Menu({selectedFB_type, setSelectedFB_type}:any) {
    const [FB_List_To_Render, setFB_List_To_Render] = useState(food_full_menu)
    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (500 / 40); // Adjust the speed as needed
    
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      };
    const handleFB_Chang=()=>{
        if(selectedFB_type==='Food'){
            setFB_List_To_Render(food_full_menu)
        }
        if(selectedFB_type==='Drinks'){
            setFB_List_To_Render(drinks_full_menu)
        }
        if(selectedFB_type==='Desserts'){
            setFB_List_To_Render(desserts_full_menu)
        }
        scrollToTop()
    }
    useEffect(() => {
handleFB_Chang()
    }, [selectedFB_type])
    
  return (
      <>
    {            FB_List_To_Render.map(
                (category:any)=>
                {
            return <FB_Cat key={category.categoryName} category={category}/>
        })
    }
    </>
  )
}
