import React from 'react'

const App = () => {

  
  const name = "JaganJavid";
  const email = "jaganjavid@gmail.com";

  const loading = false;

  const showComment = true;


  if(loading === true){
    return (
      <h1>Loading ...</h1>
    );
  }

  const comments = [
    {id:1, text: "Comment one"},
    {id:2, text: "Comment two"},
    {id:3, text: "Comment three"},
  ]

  return (
    <div className='container'>
      <h1>{name}</h1>
      <p>{email}</p>

      {/* <h5>{showComment ? "Yes" : "No"}</h5> */}

      {showComment && (<div className='comments'>
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>)}
      
    </div>
    
  )
}

export default App


