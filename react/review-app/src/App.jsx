import React, { useState } from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Card from './components/shared/Card';


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


  return (
    <>
      <Header/>
      <div className='container'>
         <FeedbackList feedback={feedback}/>
      </div>
    </>
  )
}

export default App


