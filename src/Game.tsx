import React, { useState } from 'react';
import './App.css';
import  Board from './components/board/styledBoard';

function Game() {

  const [gameArray, setGameArray] = useState(['', '', '', '', '', '', '', '', '']);
  const [whosTurn, setWhosTurn] = useState('x');
  const [isWinner, setIsWinner] = useState(false);

  const winningCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
  ]

  const winner = (gameArray: string[]): boolean => {
    return winningCombos.some((combo: number[]) => {
      return whosTurn == gameArray[combo[0]] && whosTurn == gameArray[combo[1]] && whosTurn == gameArray[combo[2]];
    })
  }

  const isTie = (gameArray: string[]) => {
    const isFilled = (char: string) => {
      return char != '';
    }

    const fullArray = gameArray.every(isFilled);
    if (fullArray && !isWinner) {
      setWhosTurn('Tie');
    }
  }


  const onChangeTile = (i: number) => {
    const newGameArray = [...gameArray];
     if (gameArray[i] == '' && !isWinner) {  
      newGameArray[i] = whosTurn;
      setGameArray(newGameArray);
      const win = winner(newGameArray);
      setIsWinner(win);

      if (!win) {
        setWhosTurn(whosTurn == 'x' ? 'o' : 'x');
        isTie(newGameArray)
      }
    }
  }

  const tracker = <div><h1>who's turn? {whosTurn}</h1></div>;
    return (
      <div>
        {tracker}
        <div><h1>Is there a winner? {String(isWinner)} </h1></div>
      <Board
        arr={gameArray} 
        onChangeTile={onChangeTile} />
      </div>
    );
}

export default Game;
