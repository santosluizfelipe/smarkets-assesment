import React, { useEffect, useState } from 'react';

const GettingData = () => {
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

        const response = await fetch(' https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/sessions/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000', 
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch session token');
        }

        const data = await response.json();
        setSessionToken(data.token);
    

        fetchAccountInfo(data.token); // Pass the token received from session
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchAccountInfo = async (token) => {
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v0/accounts/', {
          headers: {
            'Accept': 'application/json',
            'Session-Token': token,
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

    getSessionToken('lewedi3258@acuxi.com', 'password@555234');
    // getSessionToken('john.doe@company.com', 'verysecurepassword');
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {sessionToken && <p>Session Token: {sessionToken}</p>}
      {accountInfo && <p>Account Info: {JSON.stringify(accountInfo)}</p>}
    </div>
  );
};

export default GettingData;
