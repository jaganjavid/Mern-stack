import { useState } from "react";
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";




const FeedbackForm = ({handleAdd}) => {

  const [text, setText] = useState("");  
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {

    if(text === ""){
      setBtnDisabled(true);
      setMessage(null);
    } else if(text !== "" && text.trim().length <= 10){
      setMessage("Text must be at least 10 chatacters");
      setBtnDisabled(true);
    } else{
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }

      handleAdd(newFeedback);

      setText("");
      setRating(0);
    }
  }

  return (
    <Card>
        <h1>Add you Feedback</h1>

        <h2>{text}</h2>
        <h3>{rating}</h3>

       <form onSubmit={handleSubmit}>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
            <input type="text" placeholder="Write you feedback" value={text} onChange={handleTextChange}/>
            <Button type="submit" isDisabled={btnDisabled}>
                Send
            </Button>
        </div>

        {message && <div className="message">
         {message}  
        </div>}
        
       </form>
    </Card>
  )
}


export default FeedbackForm
