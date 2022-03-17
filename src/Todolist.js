import React from 'react';
import { useState } from 'react';

import Card from './Card';


function Todolist() {

  const [previewTitle, setPreviewTitle] = useState("");
  const [previewDescription, setPreviewDescripton] = useState("");
  const [cards, setCards] = useState([])

  const generateUniqueID = () => {
    const animalList = ["poulet", "vache", "girafe", "loup","jambon", "chevre", "bouquetin", "Axolotl", "Perroquet", "Hippopotame", "corbeau"]
    const uniqueID = String(Math.floor(Math.random() * (100000 - 1000) + 1) + animalList[(Math.floor(Math.random() * (animalList.length - 0) + 0))]) ;
    return uniqueID
  }

  const handleAddItemOnList = (e) => {
    if (previewTitle == "" && previewDescription == ""){
      document.getElementById('alertContainer').innerHTML = '<div class="alert alert-warning" role="alert">Veuillez au moins renseigner un champ</div>'
    }else{
      e.preventDefault()
      document.getElementById('alertContainer').innerHTML = ''
      const id = generateUniqueID();
      const temporaryList = {
        id: id,
        title: previewTitle,
        description: previewDescription,
        status: false
      };

      setCards(prev => [...prev, temporaryList])
      setPreviewTitle('')
      setPreviewDescripton('')
      document.querySelector('#text').value = ""
      document.querySelector('#textarea').value = ""
    }
    
  }

  console.log(cards)


  return (
    <div className="todolist_container">
      <div id='alertContainer'></div>
      <div className="top_container">
      
        <div className="form">
          <input type="text" className="form-control" id='text' placeholder="titre de la tâche" onChange={e => { setPreviewTitle(e.target.value) }} />
          <textarea wrap='hard' id='textarea' className="form-control" placeholder="Description de la tâche" onChange={e => { setPreviewDescripton(e.target.value) }} rows='6' cols="auto" />
          <button className="btn btn-primary" onClick={(e) => handleAddItemOnList(e)}>Ajouter la tâche</button>
        </div>
        {/* Carte de prévision */}
        <div className="cardPreview_container">
          <div className="wrapper">
            <h2>{previewTitle}</h2>
            <p>{previewDescription}</p>
          </div>
        </div>
      </div>
      <section className="lists">
        {/* Cartes "TO DO" */}
        <div className="todo">
          <h2>A faire</h2>
          {cards.filter(card => card.status == false).map((card) => (
            <Card key={card.id} id={card.id} title={card.title} description={card.description} cards={cards} setCards={setCards} status={card.status} />
          ))}
        </div>
        {/* Cartes "DONE" */}
        <div className="done">
          <h2>Fait</h2>
          {cards.filter(card => card.status == true).map((card) => (
            <Card key={card.id} id={card.id} title={card.title} description={card.description} cards={cards} setCards={setCards} status={card.status} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Todolist