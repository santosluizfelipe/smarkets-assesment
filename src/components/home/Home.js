import React, { useState, useEffect } from "react";
import GameSelector from "../gameSelector/GameSelector";
import { HomeWrapper, ButtonContainer, CardContainer } from "./Home.style";
import { premierLeague, nba, counterStrike, mlb } from "../../mockData/mock";

import Card from "../card/Card";

const Home = () => {
  const [gameSelected, setGameSelected] = useState([]);

  const handleGameSelect = (game) => {
    setGameSelected(game);
  };

  useEffect(() => {
    console.log(gameSelected);
  }, [gameSelected]);

  const getGameData = () => {
    switch (gameSelected) {
      case "Football":
        return premierLeague.matches;
      case "Basketball":
        return nba.matches;
      case "Baseball":
        return mlb.matches;
      case "Counter Strike":
        return counterStrike.matches;
      default:
        return [];
    }
  };

  const gameData = getGameData();

  return (
    <HomeWrapper>
      <ButtonContainer>
        <GameSelector
          selectedGame={"Football"}
          onClick={() => handleGameSelect("Football")}
          isSelected={gameSelected === 'Football'}
        />
        <GameSelector
          selectedGame={"Baseball"}
          onClick={() => handleGameSelect("Baseball")}
          isSelected={gameSelected === 'Baseball'}
        />
        <GameSelector
          selectedGame={"Basketball"}
          onClick={() => handleGameSelect("Basketball")}
          isSelected={gameSelected === 'Basketball'}
        />
        <GameSelector
          selectedGame={"Counter Strike"}
          onClick={() => handleGameSelect("Counter Strike")}
          isSelected={gameSelected === 'Counter Strike'}
        />
      </ButtonContainer>
      {gameSelected && (
        <CardContainer>
          {gameData.map((match, index) => (
            <Card
              key={index}
              title={`${match.homeTeam} vs ${match.awayTeam}`}
              value={`Traded: £${match.value}`}
              date={new Date(match.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
              greenB={match.odds.homeWin}
              blueB={match.odds.awayWin}
            />
          ))}
        </CardContainer>
      )}
    </HomeWrapper>
  );
};

export default Home;
