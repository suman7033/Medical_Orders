import React, { useState } from 'react';
import ItemCard from './components/ItemCard';
import './cart.css';
import Child from './store/Child';
import About from './components/About';


function App() {
   
   const [items,setItems]=useState([]);
   const [itemName,setItemName]=useState('');
   const [itemDescription,setItemDescription]=useState('');

   const addItem=()=>{
     if(itemName.trim() !=='' && itemDescription.trim() !==''){
       const newItem={name: itemName,description: itemDescription}
       setItems([...items, newItem]);
       setItemName('');
       setItemDescription('');
     }
   };
  return (
    <div className='App'>
      <Child>
       <h1>let's start</h1>
       <div>
          <input type='text' placeholder='item Name' value={itemName} onChange={(e)=> setItemName(e.target.value)}/>
          <input type='text' placeholder='Item description' value={itemDescription} onChange={(e)=> setItemDescription(e.target.value)}/>
          <button onClick={addItem}>Add Item</button>
       </div>
       <div className='item-list'>
          {items.map((item,index)=>(
             <ItemCard key={index} item={item}/>
          )
          )}
       </div>
       <About/>
       </Child>
    </div>
  );
}

export default App;
