import React, { useState, useEffect } from "react";
import GameSelector from "../gameSelector/GameSelector";
import Navbar from "../navbar/Navbar";
import { HomeWrapper, ButtonContainer, CardContainer } from "./Home.style";
import { premierLeague, nba, counterStrike, mlb } from "../../mockData/mock";

import Card from "../card/Card";

const Home = () => {
  // state variable to handle the first display of the cards
  const [gameSelected, setGameSelected] = useState("Football");
  const [sessionToken, setSessionToken] = useState(null);
  const [accountInfo, setAccountInfo] = useState(null);
  const [error, setError] = useState(null);



  useEffect(() => {

    const getSessionToken = async (email, password) => {
      try {
        const requestBody = {
          create_social_member: true,
          password: password,
          remember: true,
          use_auth_v2: false,
          username: email
        };
        
        // Send request to backend endpoint
        const response = await fetch("http://localhost:8080/https://api.smarkets.com/v3/sessions/", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000', 
          },
          body: JSON.stringify(requestBody),
          
        });
        console.log(requestBody)
    
        if (!response.ok) {
          throw new Error('Failed to fetch session token');
        }
    
        const data = await response.json();
        console.log("cheguei ate aqui")
      
    
        setSessionToken(data.token);
        console.log("sessionToken", sessionToken)
        console.log("data.token", data.token)
        fetchAccountInfo(sessionToken);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchAccountInfo = async (token) => {
      try {
        const apiUrl = 'http://api.smarkets.com/v3/accounts/';
        
    
        const response = await fetch('http://localhost:8080/https://api.smarkets.com/v3/accounts/', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000', 
          },
        });
    
        if (!response.ok) {
          const responseData = await response.json();
          throw new Error(responseData.error_type || 'Failed to fetch account info');
        }
    
        const data = await response.json();
        setAccountInfo(data);
      } catch (error) {
        setError(error.message);
      }
    };
    

    getSessionToken('tajod46787@avastu.com', 'password@111999');

  }, []);


  const handleGameSelect = (game) => {
    setGameSelected(game);
  };

  // useEffect to refresh data being displayed
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


  console.log(sessionToken)
  console.log(accountInfo)


  return (
    <>
    <Navbar balance={accountInfo.account.balance} />
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
    </>
  );
};

export default Home;
