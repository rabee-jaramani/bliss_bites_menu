import React, { useEffect } from 'react'
import FB_CAT from './FB_CAT'
export default function FB_MENU({selectedFB_type, handleFB_Change,FB_List_To_Render}:any) {

    useEffect(() => {
handleFB_Change()
    }, [selectedFB_type,handleFB_Change])
    
  return (
      <>
    {            FB_List_To_Render.map(
                (category:any)=>
                {
            return <FB_CAT key={category.categoryName} category={category}/>
        })
    }
    </>
  )
}
