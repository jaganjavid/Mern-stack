import React, { useState } from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {

  const [feedback, setFeedback] = useState([
    {
      id:1,
      text: "This is example 1",
      rating: 3
    },
    {
      id:2,
      text: "This is example 2",
      rating: 2
    },
    {
      id:3,
      text: "This is example 3",
      rating: 7
    },
]);

const addfeedback = (newFeedback) => {
  newFeedback.id = uuidv4();
  setFeedback([newFeedback, ...feedback]);
  console.log(feedback);
}

 

  return (
    <FeedbackProvider>
      <Header/>
      <div className='container'>
         <FeedbackForm handleAdd={addfeedback}/>
         <FeedbackStatus/>
         <FeedbackList/>
      </div>
    </FeedbackProvider>
  )
}

export default App


