import React from 'react'
import {useState} from 'react';

function Card({title, description, id, status, setCards, cards}) {

  const handleClick = () => {
    switch(status) {
      case true:
        status=false;
        break;

      case false:
        status=true;
        break;
    }
    
    let newList=cards.map(e => {
      if(e.id === id ) {
        return {...e, status:status}
      }
        return e;
    });

    setCards(newList);
  }

  const handleDelete = () => {
    let newList= cards.filter(card => card.id !== id)

    setCards(newList);
  }

  function Buttons(){
    if(status == false){
      return <button className="btn btn-success" onClick={() => handleClick()}>Fait</button>
    }
    else if (status == true){
      return <div className="button_container"><button className="btn btn-warning" onClick={() => handleClick()}>A faire</button><br/><button className="btn btn-danger" onClick={() => handleDelete()}>Supprimer</button></div>
    }
  }

  return (
    <div id={title} className="cardPreview_container">
      <h3>{title}</h3>
      <p>{description}</p>
      <Buttons />
    </div>
  )
}

export default Card