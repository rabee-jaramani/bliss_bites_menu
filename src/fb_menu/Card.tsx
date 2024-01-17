import React from 'react'
import ModalPopUp from '../components/ModalPopUp'
import PopperItemDetails from '../components/PopperItemDetails'
import placeholder from '../images/placeholder.webp'
export default function Card({item}:any) {
  return (
    <div className='card'>
        <img src={item.image}/>
        <div className='item-details-div'>
        <h3 className='item-name'>{item.itemName}</h3>
        <p className='item-description'>{item.description.length>60?item.description.slice(0, 60) + '...':item.description}</p>
        <div className='price-readmore'>
          <p className='add-on'>Add On</p>
        <h3 className='item-price'><span className='aed'>AED</span>{item.price}</h3>
        </div>
        </div>
        {/* <PopperItemDetails itemDetails={item.description}/> */}
        <ModalPopUp itemDetails={item}/>
    </div>
  )
}
