import React, { useEffect, useState } from 'react';

const GettingData = () => {
  const [sessionToken, setSessionToken] = useState(null);
  const [accountInfo, setAccountInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to get session token
    const getSessionToken = async (email, password) => {
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/sessions/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: email, password }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch session token');
        }
        const data = await response.json();
        setSessionToken(data.token); 
        console.log("data", data)
      } catch (error) {
        setError(error.message);
      }
    };

    // Function to fetch account info
    const fetchAccountInfo = async (sessionToken) => {
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v0/accounts/', {
          headers: {
            'Accept': 'application/json',
            'Session-Token': sessionToken,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch account info');
        }
        const data = await response.json();
        setAccountInfo(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getSessionToken('luizfelipe0598@icloud.com', 'Sm@rketsAccount2024');
  }, []); 

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {sessionToken && <p>Session Token: {sessionToken}</p>}
      {accountInfo && <p>Account Info: {JSON.stringify(accountInfo)}</p>}
    </div>
  );
}

export default GettingData;
