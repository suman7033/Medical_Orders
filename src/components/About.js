import React, {useContext} from 'react'
import NoteContext1 from '../store/context1';

const About = (props) => {

   const ContextData=useContext(NoteContext1);

  return (
    <div>
      <h3>About</h3>
      <h2>{ContextData.name}</h2>

    </div>
  )
}

export default About
