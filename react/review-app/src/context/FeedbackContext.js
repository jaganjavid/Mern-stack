import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {


    const [feedback, setFeedback] = useState([
        // {
        //     id:1,
        //     text: "This is example 1 from context",
        //     rating: 3
        //   },
        //   {
        //     id:2,
        //     text: "This is example 2 from context",
        //     rating: 2
        //   },
        //   {
        //     id:3,
        //     text: "This is example 3 context",
        //     rating: 7
        //   },
    ])

    const addfeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id)  => {
      if(window.confirm("Are you sure")){
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    }
   
    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        addfeedback
    }}>
      {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;



