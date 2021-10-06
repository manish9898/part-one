import React, { Component } from "react";
import Specail from "./Specail";

export class CardComp extends Component {
  render() {
    return (
      <div>
        <div className="contianer">
          <div className="row mx-4 gy-4 my-4">
            <Specail
              imgsrc="https://images.pexels.com/photos/190589/pexels-photo-190589.jpeg"
              headtitle="First Title" paragraph="kamal"
            />
            <Specail
              imgsrc="https://images.pexels.com/photos/5096615/pexels-photo-5096615.jpeg"
              headtitle="Second Title" paragraph="Jatin"
            />
            <Specail
              imgsrc="https://images.pexels.com/photos/5520711/pexels-photo-5520711.jpeg"
              headtitle="Third Title" paragraph="Kenny"
            />
            <Specail
              imgsrc="https://images.pexels.com/photos/4729140/pexels-photo-4729140.jpeg"
              headtitle="Forth Title" paragraph="Rohan"
            />
            <Specail
              imgsrc="https://images.pexels.com/photos/9599167/pexels-photo-9599167.jpeg"
              headtitle="Fifth Title" paragraph="Nitin"
            />
            <Specail
              imgsrc="https://images.pexels.com/photos/3236761/pexels-photo-3236761.jpeg"
              headtitle="Six Title" paragraph="Nidhi"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardComp;
