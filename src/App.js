import People from './Elements/People';
import React from 'react';
import cards from './Elements/FlipCard';
import FlipCard from './Elements/FlipCard';
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Elements/style.css";

function App() {
  // I was going for a hovor kind of card but didnt have enough time to debugg everything :/ unlucky here is all the code thats left 
  // const cards = [
  //   {
  //     id: "1",
  //     variant: "hover",
  //     front: "Hover",
  //     back: "Back"
  //   },
  //   {
  //     id: "2",
  //     variant: "click",
  //     front: "Click",
  //     back: "Back"
  //   },
  //   {
  //     id: "3",
  //     variant: "focus",
  //     front: "Focus",
  //     back: "Back"
  //   }
  // ];
  return (
    <div className="App"> 
    <People />
  </div>
    // <div className="container">
    //   <div className="row h-100">
    //     <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
    //       {cards.map((card) => (
    //         <FlipCard key={card.id} card={card} />
    //       ))}
    //     </div>
    //   </div>
    //</div>
  );
}

export default App;

