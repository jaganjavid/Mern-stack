import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';


const FeedbackStatus = () => {

  const {feedback} = useContext(FeedbackContext);

  let average = feedback.reduce((acc, cur) => {
       return acc + cur.rating
  }, 0) / feedback.length;

  console.log(average);

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length}</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average.toFixed(1)}</h4>
    </div>
  )
}

export default FeedbackStatus