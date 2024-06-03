# Summary 

## choices 

First, for the framework, I completed the take-home test in React, as that is the framework I used at Cimple and am therefore most familiar with. For the styling, I used styled components for this same reason, as well as the fact that in my opinion, they make the code cleaner and easier to read. Based on my previous experience using vanilla CSS and tailWind, I find that the use of classnames in the JSX tags makes the code clunkier and harder to read. Finally, for the colour palette, I created a file called ‘Themes,’ and in an object format, I assigned a variable with all the colours that I needed to build the platform to lower the chance of human error when typing the colours’ hexadecimal codes.

## Challenges
Initially, I connected to the API using Postman after creating an account on Smarkets’ website. After numerous attempts to generate a session token, the API stated each time that I needed to change my account’s password. However, after changing my password, the API still didn’t recognise my new password and instead crashed. Therefore, I had to create a new account each time this bug occurred.

After verifying account information in Postman, I decided to integrate the API by using CORS Anywhere as recommended. While I used the ‘AccountInfo’ endpoint to render the user’s account balance, the other data is mock data provided by ChatGPT due to the aforementioned error. Regardless, I would like to highlight that the access token is completely functional.

The first challenge I had was determining which functionalities I wanted to implement in my project to fully reflect both Smarkets’ design standard, as well as my ability to transform mock-ups into functional pages. To do so, I made a grid for each sport with possible bets that could be made. At the top, I made a simple navigation bar to facilitate switching between sports by using the React useState hook to render the chosen sport.

The second challenge I had was implementing a responsible website for mobile devices. To address this, I followed the best coding practices that I learned at Cimple and started first with the mobile display, and then the tablet display, and finally the desktop display. I used media queries to define the size of each screen, as the size of components changes based on which application and device is being rendered.

## Improvements
If I had more time, I would implement another component to change the amount bet up to that point. After a bet is made, I would make it so that the value ‘Traded’ in the bottom right-hand corner would update to reflect the recently-placed bet. Additionally, I would add an image carousel with sports and political news, similar to what is on Smarkets’ website currently. For mobile devices, I would add a hamburger menu in the top left corner to switch between sports. As my project stands right now, the four possible sports permanently remain at the top of the page on mobile devices.