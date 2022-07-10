import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import './App.css';
import { SingleCard } from './components/SingleCard/SingleCard';

const cardImages = [
  { src: '/image/helmet-1.png', matched: false },
  { src: '/image/potion-1.png', matched: false },
  { src: '/image/ring-1.png', matched: false },
  { src: '/image/scroll-1.png', matched: false },
  { src: '/image/shield-1.png', matched: false },
  { src: '/image/sword-1.png', matched: false }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //Adding two options for the each User
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);
  //Compare 2 cards
  useEffect(() => {
    //This function basically does first compare both choices, after that compare their src and will give the card a value with setCards, but first its going to run a prevCards a new array using map, where it will go through each card and see their value src and compare to choice one, then it will create a new array with matched value of true
    if (choiceOne && choiceTwo) {
      setDisabled(true); //adding this here i will change the boolean just when i have the two choices
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000); //Adding this time out i can see the card for a second and they wont flip too fast
      }
    }
  }, [choiceOne, choiceTwo]);

  //Shuffle cards. Duplicate one of App
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5) //creating a  shuffle array
      .map(card => ({ ...card, id: Math.random() })); //adding ID to each card
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a Choice
  const handleChoice = card => {
    // If choiceOne is null the thing on the right will go, if we have a value is false so choice two will be use
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //Reset Choices and increase Turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  // Start a new Game Automatically

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <Button variant="contained" onClick={shuffleCards}>
        New Game
      </Button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              card === choiceOne ||
              card === choiceTwo ||
              card.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
