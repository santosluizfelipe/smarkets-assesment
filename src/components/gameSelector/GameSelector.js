import React from "react";
import { GameButton, UnselectedGameButton } from "./GameSelector.style";

const GameSelector = ({selectedGame, onClick, isSelected }) => {
  return (
    isSelected ? (
      <GameButton onClick={onClick}>
        {selectedGame}
      </GameButton>
    ) : (
      <UnselectedGameButton onClick={onClick}>
        {selectedGame}
      </UnselectedGameButton>
    )
  );
  
}

export default GameSelector;