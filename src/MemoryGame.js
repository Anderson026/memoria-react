import React, { useEffect, useState } from "react"
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import game from "./game/game";

export default function MemoryGame() {
  // estado do game over
  const [gameOver, setGameOver] = useState(false);
  // criando o estado das cartas
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(game.createCardsFromTechs());
  }, [])
   // função para reiniciar o jogo
   function restart() {
    game.clearCards();
    setCards(game.createCardsFromTechs());
    setGameOver(false);
  }
  // função para verificar se a carta está virada
  function handleFlip(card) {
    game.flipCard(card.id, () => {
      // GameOverCallback
      setGameOver(true);
    }, () => {
      // NoMatchCallback
      setCards([...game.cards]);
    })
    setCards([...game.cards]);
  }

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  )
}