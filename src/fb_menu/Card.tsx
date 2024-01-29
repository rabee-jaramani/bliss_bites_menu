import React from 'react'
import ModalPopUp from '../components/ModalPopUp'
export default function Card({item}:any) {
  return (
    <div className='card'>
        <img src={item.image} alt={item.itemName}/>
        <div className='item-details-div'>
        <h3 className='item-name'>{item.itemName}</h3>
        <p className='item-description'>{item.description.length>60?item.description.slice(0, 60) + '...':item.description}</p>
        {item.icons?
        <div className='icons-div'>{item.icons.map((icon:any)=>{return <img src={icon} />})} </div>
        :
        ''}
        <div className='price-readmore'>
          <p className='add-on'>Add On</p>
        <h3 className='item-price'><span className='aed'>AED</span>{item.price}</h3>
        </div>
        </div>
        <ModalPopUp itemDetails={item}/>
    </div>
  )
}
