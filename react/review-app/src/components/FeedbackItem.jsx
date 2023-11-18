import React, { useState } from 'react'
import Card from './shared/Card'

const FeedbackItem = ({item}) => {

    // Component state
    // const [rating, setRating] = useState(1);
    // const [text, setText] = useState("This is an example 1");


  return (
    <Card>
       <div className='num-display'>{item.rating}</div>
       <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem