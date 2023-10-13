import React, { useContext } from 'react'
import NoteContext2 from '../store/context1';

const ItemCard = ({item}) => {
     const contextUse=useContext(NoteContext2);

     
  return (
    <div className='item-card'>
      <h1>{contextUse.name}</h1>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      
    </div>
  )
}

export default ItemCard;

