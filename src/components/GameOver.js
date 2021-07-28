import React, { Fragment } from "react";

export default function GameOver(props) {

  // verifica se o jogo terminou para poder mostrar a tela de game over
  return (props.show ?
    <div>
      <div id="gameOver">
        <div>
          Parabéns, você completou o jogo!
        </div>
        <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
      </div>
    </div>:
    <Fragment></Fragment>
  )
}