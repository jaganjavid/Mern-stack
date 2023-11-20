import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import Card from './shared/Card';

const FeedbackItem = ({item, handleDelete}) => {

    // Component state
    // const [rating, setRating] = useState(1);
    // const [text, setText] = useState("This is an example 1");


  return (
    <Card>
       <div className='num-display'>{item.rating}</div>
       <button className='close' onClick={() => handleDelete(item.id)}>
         <FaTimes color='red'/>
       </button>
       <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem