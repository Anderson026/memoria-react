import React from "react";
import CardElement from "./CardElement";
// criando a função do tabuleiro
export default function GameBoard(props) {
  return (
    <div id="gameBoard">
      {props.cards.map((card, index) => 
        <CardElement handleFlip={props.handleFlip} key={index} card={card}></CardElement>
      )}
    </div>
  )
}