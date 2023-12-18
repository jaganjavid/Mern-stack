import React, { useState } from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm';

import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {

//   const [feedback, setFeedback] = useState([
//     {
//       id:1,
//       text: "This is example 1",
//       rating: 3
//     },
//     {
//       id:2,
//       text: "This is example 2",
//       rating: 2
//     },
//     {
//       id:3,
//       text: "This is example 3",
//       rating: 7
//     },
// ]);


 

  return (
    <FeedbackProvider>
      <Header/>
      <div className='container'>
         <FeedbackForm/>
         <FeedbackStatus/>
         <FeedbackList/>
      </div>
    </FeedbackProvider>
  )
}

export default App


