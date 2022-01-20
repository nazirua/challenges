import React from 'react';
import './App.css';

 const user = {
  title: "10 React Challenges for Beginners",
  topic: "Display Simple Data with React JSX",
  name: "Naziru Abdussalam Ibrahim",
  location: "Kano Nigeria",
  foodType: "Everything",
  age: 33,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "NaziruAbdussal2",
  avatar:
    "https://twitter.com/NaziruAbdussal2"
};


const App = () => {
    const url = "https://twitter.com/NaziruAbdussal2"
    
  return (
    <div className="App">
      <h1>{user.title}</h1>
      <h2><span>Challenge_#1: </span><i>{user.topic}</i></h2>
      <a href={url}><img src="https://media.istockphoto.com/photos/asian-male-florist-owner-of-small-business-flower-shop-using-digital-picture-id1317277259?b=1&k=20&m=1317277259&s=170667a&w=0&h=K08QBPPiq5_OOZcksriP_3eHEB1z5diqY14KUad3wiU=" alt="Web" /></a>
      <h2><a href={url}>{user.name}</a></h2>
      <p><span>Age: </span><b>{user.age}</b></p>
      <p><span>Location: </span><b>{user.location}</b></p>
      <p><span>Food: </span><b>{user.foodType}</b></p>
      <p><span>Likes: </span><b>{user.likes}</b></p>
      <p><span>Twitter: </span><a href={url}><b>{user.twitterUsername}</b></a></p>

    </div>
  );
}

export default App;
