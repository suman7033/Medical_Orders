import React from 'react'
import NoteContext from './context1';

const child = (props) => {
    const Data={
      'name': 'sumo',
      "age": '22',
      'mob': '7033'
    }
  return (
    <NoteContext.Provider value={Data}>
       {props.children}
    </NoteContext.Provider>
  )
}

export default child

