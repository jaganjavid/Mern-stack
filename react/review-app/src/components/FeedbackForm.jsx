import { useState, useContext} from "react";
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from '../context/FeedbackContext';




const FeedbackForm = () => {

  const { addfeedback } = useContext(FeedbackContext);

  const [text, setText] = useState("");  
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    const trimmedText = e.target.value.trim();
    
    let textError = "";
    let ratingError = "";
  
    if (trimmedText === "") {
      textError = "Feedback cannot be empty";
    } else if (trimmedText.length < 10) {
      textError = "Feedback must be at least 10 characters";
    }
  
    setMessage(textError || ratingError); // Update the message based on text
    setBtnDisabled(!!(textError || ratingError)); // Update button disable/enable based on errors
  
    setText(trimmedText);
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  
    let ratingError = "";
  
    if (selectedRating === 0) {
      ratingError = "Please select a rating";
    }
  
    setMessage(ratingError); // Update the message based on rating
    setBtnDisabled(!!ratingError); // Update button disable/enable based on rating error
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const textError = text.trim().length < 10 ? "Feedback must be at least 10 characters" : "";
    const ratingError = rating === 0 ? "Please select a rating" : "";
  
    if (!textError && !ratingError) {
      const newFeedback = { text, rating };
      addfeedback(newFeedback);
  
      setText("");
      setRating(0);
      setMessage("Feedback submitted successfully!");
    } else {
      setMessage(textError || ratingError); 
    }
  };

  return (
    <Card>
        <h1>Add you Feedback</h1>

       <form onSubmit={handleSubmit}>
        <RatingSelect select={handleRatingChange}/>
        <div className="input-group">
            <input type="text" placeholder="Write you feedback" value={text} onChange={handleTextChange} disabled={rating === 0 ? true : false}/>
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
