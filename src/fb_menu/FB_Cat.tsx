import React from 'react'
import Card from './Card'

export default function FB_Cat({category}:any) {

    console.log("categoryyy",category)
  return (
    <div className='fb-cat-container'>
        <h2 className='fb-cat-title'>{category.categoryName}</h2>
        <div className='fb-cat-grid'>
            {category.items.map((item: { itemName: any })=>{
            return <Card key={item.itemName} item={item}/>
            })}
        </div>
    </div>
  )
}
