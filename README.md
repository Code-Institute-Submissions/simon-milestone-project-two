# Simon Game - Milestone Project Two

## Table of Contents

- [**About**](#About)
  - [Why This Project?](#Why-This-Project?)
- [**UX**](#UX)
  - [User Stories](#User-Stories)
  - [Research](#Research)
  - [Style Rationale](#Style-Rationale)
  - [Wireframes](#Wireframes)
- [**Features**](#Features)
  - [Functionality](#Functionality)
  - [Existing Features](#Existing-Features)
    - [Game Controls](#Game-Controls)
    - [Modes](#Modes)
  - [Features Left To Implement](#Features-Left-To-Implement)
- [**Technologies Used**](#Technologies-Used)
- [**Testing**](#Testing)
  - [Testing User Stories](#Testing-User-Stories)
  - [Automated Testing](#Automated-Testing)
    - [Run Jasmine Tests](#Run-Jasmine-Tests)
    - [Create Jasmine Tests](#Create-Jasmine-Tests)
  - [Responsive Testing](#Responsive-Testing)
  - [Additional Testing](#Additional-Testing)
  - [HTML And CSS Validation](#HTML-And-CSS-Validation)
  - [Interesting Bugs Or Problems](#Interesting-Bugs-Or-Problems)
- [**Deployment**](#Deployment)
  - [Repository Link](#Repository-Link)
  - [Running Code Locally](#Running-Code-Locally)
- [**Credits**](#Credits)
  - [Content](#Content)
  - [Media](#Media)
    -[Sounds](#Sounds)
  - [Acknowledgements](#Acknowledgements)
  - [Disclaimer](#Disclaimer)

## About

This application (app) is my rendition of the classic simple memory game, **_Simon_**. The aim of the game is to replicate a sequence of signals which are displayed via a synchronised combination of musical tones and animated buttons.

You can find out more about the original **_Simon_** game and rules by watching this [video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4), or visiting this [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)) page.

### Why This Project?

I created this game for the Interactive Frontend Development project. The project scope was to create the game using HTML, CSS and JavaScript, with the core focus being the functional logic created with JavaScript.

There was a choice of three different projects. My weakest area of JavaScript was with understanding functions and how they can be called or passed to other functions. This was a major aspect of the **_Simon_** game project, so choosing this project would enable me to develop my weakest area. I learnt a lot during the course of the project, and it has definitely helped me to stregthen my weakest area.

## UX

### User Stories

- I want to be presented with a random series of button presses.
- When I input the correct series of button presses, I want the same series of button presses to be shown in the next round, but with an additional button press added to the series.
- If I press the wrong button, I want to be notified of this and be presented with the same series of button presses before the game will allow me to try again.
- I want to be able to see a display which shows me which round I am currently on - the round number should correspond to the number of button presses in that round.
- I want to hear a different sound for each game button, both when the sequence plays, and also when I press the buttons.
- I want to have a 'strict mode' option, which takes me back to the start of the game if I press the wrong button in a sequence.
- I want a 'reset' button, which will allow me to return to the start of the game when pressed.
- I want to have a 'hard mode' option, which speeds up the sequence as the rounds progress.
- I want to have a 'legendary mode' which is speeds up the sequence as the rounds progress, and allows for no mistakes.
- I want to be notified of when I win the game after completing a set number of rounds.
- I want to be able to turn the sound on and off.

### Research

To understand the game, I researched existing renditions of the **_Simon_** game, which gave me an idea of the layout and functionality that those renditions were using. This gave me some insight into what options I could implement within my rendition of the game, and helped me to plan for my project.

Most of the renditions I saw seemed to us a circular user interface (UI), which contained all the game's controls within it. However, the responsiveness of these apps seemed to be an issue. Some of the renditions that I saw used a UI similar to what I used in my rendition, which seemed to be much more responsive. This is my reasoning why I chose that particular UI design.

### Style Rationale

I've chosen to style my app in the way that I have, as I felt that it best reflected the game. The game was popular in the 1980s, so the fonts and colour scheme that I've chosen create an 'Arcade' game feeling for users. I've also chosen to condense the layout to make it easier for the user to interact with the game controls.

### Wireframes

I drew my wireframes using Balsamiq. I have done separate wireframes to show my consideration of how to make my website/app responsive. The links to the files are below:

- [index.html (xs and sm)](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/wireframes/index-wireframe-3.png)
- [index.html (md)](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/wireframes/index-wireframe-2.png)
- [band.html (lg and xl)](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/wireframes/index-wireframe-1.png)

There are some differences between my wireframes and my final website. This was due to visual preferences and feedback received from my mentor, and also other users who tested my website.

## Features

### Functionality

- A random seqence of sound and light buttons get is generated and presented to the user by the CPU.

- The user is then required to input/repeat the displayed sequence correctly by clicking the relevant button sequences with a cursor on laptop/desktop devices, or a finger/thumb on touch devices. A valid user input initiates the next round where the same sequence is replayed, but with an additional step.

- When users click/press a button, they will hear a sound and see a light colour that corresponds to the button that they click/press. Users will only be able to click the buttons when it is their turn to do so. The buttons are disabled at all other times.

- If a user inputs the wrong sequence, a notification by a specific sound accompanied with a text message will appear in the display area, after which the previous sequence replays and allows the user to try again. 'Non-strict' mode allows for one mistake, any additional mistakes causes the game to reset. 'Strict mode' allows for no mistakes, the game restarts after the user makes one mistake.

- The round number corresponds to the number of button presses so that the user can see how many steps are in the current sequence.

- If a user wants to restart the game, they can click the 'RESET' button to do so.

- A user can play in 'Default Mode', in which a new step in the CPU sequence occurs every 800 milliseconds. The user can also play in 'Hard Mode', in which the time between each step in a sequence reduces as the rounds progress. 'Strict Mode' is compatible with any mode.

- Repeating 20 sequences correctly means that the user wins the game. When this happens, a message stating 'YOU WIN!' appears in the display area, and a specific sound plays. The user is also instructed to press 'START' to start a new game.

### Existing Features

#### Game Controls

- **Header Logo** - Users are able to click the **_Simon_** logo in the header, which reloads the webpage/app.
- **"?" Icon** - Users are able to click the **"?"** icon in the header, which loads a modal.
- **Modal** - The modal is triggered by the "?" icon, and it allows users to read the instructions for how to operate the game.
- **Volume icon** - Users are able to click the volume icon in the header, which toggles the sound on and off. The icon also changes depending on the toggle state.
- **On/Off Button** - Users can toggle the On/Off button to switch the power on or off. When the power is on, css is used to highlight this button, the board activates and the text is displayed in the other buttons. When the power is off, this button returns to its default state, the board deactivates and the text in the other buttons is hidden. If 'Hard' and/or 'Strict' mode is on, these are toggled to off when the game is powered off. This gives the user a clear visual indication of when the game is on or off.
- **Hard Button** - Users can toggle the Hard button to turn 'Hard mode' on or off. When 'Hard mode' is on, css is used to highlight this button. When 'Hard mode' is off, this button returns to its default state. If 'Hard mode' is on, this is automatically turned off when the game is powered off. This gives the user a clear visual indication of when 'Hard mode' is on or off.
- **Strict Button** - Users can toggle the Strict button to turn 'Strict mode' on or off. When 'Strict mode' is on, css is used to highlight this button. When 'Strict mode' is off, this button returns to its default state. If 'Strict mode' is on, this is automatically turned off when the game is powered off. This gives the user a clear visual indication of when 'Strict mode' is on or off.
- **Start/Reset Button** - Users can click the Start button to start the game. During gameplay, this button changes to a Reset button and the text in it changes to 'RESET' to alert users of this. When the gameplay is over, the text in the button changes back to 'START'.
- **Display Area** - The area below the control buttons is a text display area. Before gameplay, the text in this area displays 'ROUND --' and 'PRESS START'. During gameplay, the text displays the round number and tells users whether to 'WATCH...' (CPU's turn) or 'GO...' (user's turn). If the user enters the wrong sequence, the text changes to 'WRONG' and 'TRY AGAIN!'. If the user loses the game, the text changes to 'WRONG' and 'YOU LOSE'. If the user wins the game, the text changes to 'YOU WIN!' and 'PRESS START'. This improves UX and provides visual cues for the user.
- **Game Buttons** - There are four game buttons, all different colors. Users press these buttons on their turn to repeat the sequence that the CPU displayed. The lights flash when they are active, either during the CPU's turn, or when clicked by the user. These buttons are only enabled during the user's turn, and are disabled at all other times, which prevents users from clicking these buttons when they aren't supposed to. During the user's turn, when the user clicks a game button, all game buttons are disabled for the subsequent 300 millisecond period, which prevents users from clicking the buttons too quickly. After this time, the buttons are enabled again if it is still the user's turn.
- **Footer Link** - Users can click the link, which is my name. Upon clicking the link, users are directed to my GitHub profile, which loads in a new browser tab.0
- **Alert window** - When users loses the game, an alert window is displayed which shows users the last round that they reached before losing the game. Users will need to close the alert box before a new game will restart.

#### Modes

- **Default Mode** - The lights flash in a specific sequence, every 800 milliseconds. The seuqence repeats and a new step is added to the sequence with each round, which makes the game progressively difficult. If the user makes one mistake, the previous pattern is repeated, giving the user another chance to get it right. If the user makes a second mistake, the game automatically restarts.
- **Hard Mode** - This mode is the same as 'Default Mode', with the difference being the time between the light flashes on the CPU's turn. In rounds 1 to 4, the lights flash every 800 milliseconds. In rounds 5 to 9, the lights flash every 640 milliseconds. In rounds 10 to 14, the lights flash every 520 milliseconds. In rounds 15 to 20, the lights flash every 400 milliseconds. This makes the game even harder than the 'Default Mode' as the rounds progress.
- **Strict Mode** - This mode allows no mistakes from the user. Regardless of which round the game had progressed to, if a user makes a mistake, the game automatically restarts.
- **Legendary Mode** - This mode is activated when the user turns both 'Hard Mode' and 'Strict Mode' on, making the game faster and harder as the rounds progress, and doesn't allow the user to make a mistake.
- **Incorrect Entry** - In addition to the text change in the display area (explained in the previous section), all game buttons flash to provide the user with an additional visual aid to let them know that they've made a mistake.
- **Lose Game** - In addition to the text change in the display area and the alert window (explained in the previous section), all game buttons flash to provide the user with an additional visual aid to let them know that they've made a mistake.
- **Win Game** - In addition to the text change in the display area (explained in the previous section), all game buttons light up to provide the user with an additional visual aid to let them know that they've won the game. The lights stay lit until the user presses 'START' to start a new game.

### Features Left to Implement

- **Leaderboard** - Once I learn back-end development, I would like to implement a high score leaderboard for users who have played my game. This would require asking the user to enter their name before they are able to play the game, which is then stored in a back-end database, along with the highest round that they reached.
- **Pause** - I would like to introduce a pause function, which allows users to pause the game.

## Technologies Used

- [**Balsamiq**](https://balsamiq.com/)
    - I've used **Balsamiq** to create wireframes of my website/app before building it.
- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - The project uses **HTML5** to create the basic elements and content of my game.
- [**SCSS**](https://sass-lang.com/documentation/syntax) and [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
    - The project uses **SCSS and CSS3** to add custom styles to the elements and content of my game.
- [**Bootstrap v4.3**](https://getbootstrap.com/)
    - The project uses **Bootstrap v4.3** to add a responsive grid system, prebuilt components, plugins built on jQuery, and Bootstrap styles to my game, before adding my custom styles.
- [**JavaScript**](https://www.javascript.com/)
    - The project uses **JavaScript** from my custom script.js file to add functionality to my game. This is a core focus of this project. The project also uses **JavaScript** from Bootstrap which is required to add functionality to the Bootstrap modal.
- [**jQuery**](https://jquery.com)
    - The project uses **jQuery** to simplify DOM manipulation. This is both the standard jQuery that is built with Bootstrap components, and my custom jQuery used in my script.js file.
- [**Google Fonts**](https://fonts.google.com/)
    - The project uses **Google Fonts** to style the text and suit my chosen theme.
- [**Font Awesome**](https://fontawesome.com/)
    - The project uses **Font Awesome** for the instructions and sound icons in the header of my game website/app.
- [**Cloud9**](https://c9.io/login)
    - I've used **Cloud9** as the development environment to write the code for my website.
- [**Jasmine**](https://jasmine.github.io/)
    - The project uses Test Driven Development (TDD) using the **Jasmine** framework to automate some testing of my **JavaScript** code.
- [**Git**](https://git-scm.com/)
    - I've used **Git** as a version control system to regularly add and commit changes made to project in Cloud9, before pushing them to GitHub.
- [**GitHub**](https://github.com/)
    - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website/app in a live environment.

## Testing

### Testing User Stories

I used my user stories and documented each of the steps that each user would need to accomplish what they have stated. Below is the link to the document that contains this information:

- [Testing User Stories](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/testing/manual/testing-user-stories.pdf)

### Automated Testing

I tested some of my functions with Jasmine after completing the majority of my JavaScript code. As I was completely new to JavaScript and Jasmine at the beginning of this project, I wasn't able to write TDD tests and my JavaScript code simultaneously. Therefore, I focussed on writing the code for my project first and then tackled the TDD afterwards. I also only tested some of my functions, and not all, as I didn't want to spend too much time on this by using it to test all my functions.

Now that I have a working knowledge of TDD using Jasmine and a more in depth knowledge of JavaScript, I will try to build my testing suite and write my JavaScript code simultaneously going forward.

I imported the Jasmine-jQuery CDN into the Jasmine testing boilerplate to ensure it was compatible with jQuery.

The links to my Jasmine testing suite files are below:

- HTML test page to run tests from - [indexTesting.html](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/testing/automated/indexTesting.html)
- Jasmine JavaScript testing suite - [spec.js](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/testing/automated/spec/spec.js)
- JavaScript file to be tested - [script.js](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/js/script.js)

#### Run Jasmine Tests

Once you've cloned my project by following the instructions in the **_Deployment - Running Code Locally_** below, you can run the Jasmine tests by completing the following steps:

1. Open the [indexTesting.html](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/testing/automated/indexTesting.html) file.
2. Run the file to view the results in your browser.

#### Create Jasmine Tests

Once you have my project running locally, you can create your own Jasmine tests by completing the following steps:

1. Open the [script.js](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/js/script.js) to view the existing code for my project.
2. Open the [spec.js](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/testing/automated/spec/spec.js) file.
3. Write your own tests using the Jasmine 3.3.0 framework.
4. Save the [spec.js](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/testing/automated/spec/spec.js) file.
5. Run or refresh the [indexTesting.html](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/testing/automated/indexTesting.html).

### Responsive Testing

I used Google Chrome's Development tools to constantly test each change that I made to my project and to ensure that it appeared in the desired way on different screen sizes. I also tested my game on different screen sizes (mobile, tablet and desktop) to ensure it appeared in the desired way on different devices.

To test my whole game (aspects that weren't automated), I went through each feature and documented the results on a spreadsheet. The spreadsheet also documents any responsive features and confirms that they work and appear as intended on different screen sizes. The link to the spreadsheet it below:

- [Testing Checklist](https://github.com/hebs87/simon-milestone-project-two/blob/master/assets/testing/manual/testing-checklist.pdf)

### Additional Testing

In addition to my own testing, I also asked family members, friends and the Slack community to test my game and provide any feedback.

### HTML and CSS Validation

- I used the [W3C HTML Validator tool](https://validator.w3.org/#validate_by_input) to validate my HTML code.
- I used the [W3C CSS Validator tool](https://jigsaw.w3.org/css-validator/#validate_by_input) to validate my CSS code.
- I used the [Esprima Syntax Validator tool](http://esprima.org/demo/validate.html) to validate my JavaScript syntax.

### Interesting Bugs Or Problems

- **CPU sequence wasn't playing** - The automated CPU sequence wasn't playing. I spent some time trying to debug this and ultimately asked for help on the Slack community and was signposted to a [Debugging video](https://www.youtube.com/watch?v=AX7uybwukkk) by *Anna_lead*. After watching this video, I managed to used the Chrome debugger tool to identify the bug, which was a missing semicolon in one of the functions. This took me around 5 hours to debug, but I was able to ultimately resolve it myself, and I learnt how to use the Chrome debugger tool in the process.
- **Changing modes during CPU sequence** - Changing game modes or restarting the game while the CPU sequence played caused the game to 'break', and the a refresh would be required to reload the game. To fix this bug, I used the `power = false;` statement to effective disable the game control buttons while the CPU sequence played. While this fixes the bug, this requires the user to wait until the CPU sequence has finished playing before they can use these buttons again.
- **Quick button presses** - During the user's turn to enter the sequence, the user was able to repeatedly press the same game button in quick succession, which broke the game. To combat this, I disabled the game button for 300 milliseconds after the user clicks it, to minimize the risk of them breaking the game.
- **Too many button presses** - After the last button press in a particular sequence, the game buttons are enabled for a short period of time after the 300 millisecond period that they are disabled for, before the next round initiates. This means that there is a small window of opportunity for a user to click a game button, which registers an additional button press in that particular sequence. If this is done, it causes the game to break. Trying to resolve this bug was time consuming and I also noticed that this was an issue on the other renditions of the game that I played while conducting my research. Therefore, for the scope of this project, I left it unresolved so that I didn't spend too much time on it.
- **Game button sounds** - Sometimes, the sounds don't always play when the corresponding game buttons flash, which is more noticeable on mobiles. I included a function to reset the audio clip to 0 seconds and restart it if the sound is already playing, in an attempt to resolve the sound issue. However, this didn't seem to resolve the issue. Again, trying to resolve this bug was time consuming and I also noticed that this was an issue on the other renditions of the game that I played while conducting my research. Therefore, for the scope of this project, I left it unresolved so that I didn't spend too much time on it.

## Deployment

The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Loaded the terminal window in my Cloud9 workspace.
2. Initialised Git using the `git init` command.
3. Added all files to the Staging area (Git) using the `git add .` command.
4. Committed the files to Git using the `git commit -m "Initial commit"` command.
5. Created a new repository in GitHub called 'monkees-milestone-project-one'.
6. Copied the below code from GitHub into the terminal window in my Cloud9 workspace:

    ```git remote add origin https://github.com/hebs87/monkees-milestone-project-one.git```

    ```git push -u origin master```

7. Entered my GitHub username and password to push the files from Git to GitHub.
8. Went into 'Settings' on my repository page in GitHub.
9. Selected the 'master branch' option under the 'GitHub Pages' section.
10. Ran several regular commits throughout my project.

### Repository Link

https://hebs87.github.io/simon-milestone-project-two/

### Running Code Locally

To run my code locally, users can download a local copy of my code to their desktop by completing the following steps:

1. Go to [my GitHub repository](https://github.com/hebs87/simon-milestone-project-two).
2. Click on 'Clone or download'.
3. Click on 'Download ZIP'.
4. Once dowloaded, extract the zip file's contents and run my game locally.

## Credits

### Content

- All of the code for my project was written by me.
- I watched the [Simon Game JavaScript Tutorial for Beginners](https://www.youtube.com/watch?v=n_ec3eowFLQ) video before starting my project to gain an understanding of the type of functions that I needed to include in my script.js file to ennsure the game's functionality.

### Media

#### Sounds

- **Game Button Sounds** - I got the sounds for the game buttons from [Free Code Camp](https://www.freecodecamp.org/), and assigned the url link to the relevant button in my script.js file.
- **Game Sounds** - I downloaded the sounds for the game sounds and button clicks from [Zapsplat](www.zapsplat.com) and imported them into my workspace. I then created variables for these sound files in my script.js file.

### Acknowledgements

- I received inspiration for this project from searching for Simon games in Google and testing several of the renditions that were shown in the search results.
- Thanks to the Slack community for pointing me in the right direction of how to debug my JavaScript code.
- A special mention to my mentor, Dick Vlaanderen, for his feedback on my project's scope, design and functionality, and for hints on what information to include in my README.md file to justify my stylistic choices and project choice.

### Disclaimer

This project is for educational purposes only.