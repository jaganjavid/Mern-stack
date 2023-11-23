import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: "This is example 1 from context",
            rating: 3
          },
          {
            id:2,
            text: "This is example 2 from context",
            rating: 2
          },
          {
            id:3,
            text: "This is example 3 context",
            rating: 7
          },
    ])

    return <FeedbackContext.Provider value={{
        feedback: feedback,
    }}>
      {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;



