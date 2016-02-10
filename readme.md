Thinkful Hot or Cold App Challenge

Projects Requirements:

Use your knowledge of functions and jQuery to build a "Hot or Cold" game. In this game, the computer randomly selects a number between 1 and 100, and the player then tries to guess the number. The player gets feedback for each guess – "hot" if their guess was close, and "cold" if their guess was far. When the user guesses the secret number, the app lets them know, and they'll have the option to start a new game.

For this project, you will be supplied with HTML and CSS files for the app, and you'll only be responsible for writing the JavaScript that brings these static files to life.

The mandatory requirements for this app are as follows:

You must use the HTML and CSS supplied. Once you've completed the project, you may choose to alter the layout and styles, but stick with the templates supplied initially.
When the page loads, JavaScript should start a new game. Since you'll need to be able to start a new game when the user clicks the "New Game" button, you'll want to create a newGame function that does everything necessary to start a new game.
When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this. You should try to start a new game without refreshing or reloading the page.
The user should get feedback about each guess – if it was too low, too high, or just right. This means that you'll need to write a named function that takes a user guess and determines which feedback to provide.
Feedback about the guess should appear in div#feedback. By default, when the page loads, the text in this field is set to "Make Your Guess!"
The game should track how many guesses the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).
The game should also supply users with a list of the numbers they have guessed so far.
You'll need to ensure that users provide valid inputs. Note that the guess text input field has the HTML 5 required flag set, so you won't have to worry about blank guesses being submitted (if the user submits a blank guess, they'll be prompted to supply an input). However, you will need to write code that ensures that the user has supplied a numeric input between 1 and 100.
The starter template already contains a button in the upper right hand corner for starting a new game, however, this button does not currently do anything. You'll need to write code that allows users to start a new game without making additional calls to the server. Clicking "New Game" should trigger the JavaScript function that starts a new game.
