# Simon Game - Milestone Project Two

## Table of Contents

- [About](#About)
- [UX](#UX)
  - [User Stories](#User-Stories)
  - [Research](#Research)
  - [Style Rationale](#Style-Rationale)
  - [Wireframes](#Wireframes)
- [Features](#Features)
  - [Existing Features](#Existing-Features)
    - [Game Controls](#Game-Controls)
    - [Modes](#Modes)
    - [Sounds](#Sounds)
  - [Features Left To Implement](#Features-Left-To-Implement)
- [Technologies Used](#Technologies-Used)
- [Testing](#Testing)
  - [Key-Points](#Key-Points)
  - [Tools-and-Methods-Used-for-Testing](#Tools-and-Methods-Used-for-Testing)
  - [Additional-Points](#Additional-Points)
  - [Tested-Sections-1-HTML-CSS](#Tested-Sections-1-HTML-CSS)
  - [Tested-Sections-2-JavaScript-Using-The-Jasmine-Framework](#Tested-Sections-2-JavaScript-Using-The-Jasmine-Framework)
  - [Identified Issues During Testing](#Identified-Issues-During-Testing)
- [Deployment](#Deployment)
  - [Application Location](#Application-Location)
  - [Cloning The Repository](#Cloning-The-Repository)
  - [Running The Application](#Running-The-Application)
  - [Post Deployment Tests](#Post-Deployment-Tests)
  - [Development vs Deployed Application](#Development-vs-Deployed-Application)
  - [Identified Issues During Deployment](#Identified-Issues-During-Deployment)
  - [Result](#Result)
- [Credits](#Credits)
  - [Content](#Content)
  - [Acknowledgements](#Acknowledgements)

## About

This application (app) is my rendition of the classic simple memory game, **_Simon_**. The aim of the game is to replicate a sequence of signals which are displayed via a synchronised combination of musical tones and animated buttons.

You can find out more about the original **_Simon_** game and rules by watching this [video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4), or visiting this [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)) page.

I created this game for the Interactive Frontend Development project. The project scope was to create the game using HTML, CSS and JavaScript, with the core focus being the functional logic created with JavaScript.

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

In this section, you should go over the different parts of your project, and describe each in a sentence or so.

### Existing Features

#### Game Controls

- **Header** - Users are able to click the **_Simon_** logo in the header, which reloads the webpage/app.
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

#### Modes

- **Default Mode** - The lights flash in a specific sequence, every 800 milliseconds. The seuqence repeats and a new step is added to the sequence with each round, which makes the game progressively difficult. If the user makes one mistake, the previous pattern is repeated, giving the user another chance to get it right. If the user makes a second mistake, the game automatically restarts.
- **Hard Mode** - This mode is the same as 'Default Mode', with the difference being the time between the light flashes on the CPU's turn. In rounds 1 to 4, the lights flash every 800 milliseconds. In rounds 5 to 9, the lights flash every 640 milliseconds. In rounds 10 to 14, the lights flash every 520 milliseconds. In rounds 15 to 20, the lights flash every 400 milliseconds. This makes the game even harder than the 'Default Mode' as the rounds progress.
- **Strict Mode** - This mode allows no mistakes from the user. Regardless of which round the game had progressed to, if a user makes a mistake, the game automatically restarts.
- **Legendary Mode** - This mode is activated when the user turns both 'Hard Mode' and 'Strict Mode' on, making the game faster and harder as the rounds progress, and doesn't allow the user to make a mistake.
- **Incorrect Entry** - In addition to the text change in the display area (explained in the previous section), all game buttons flash to provide the user with an additional visual aid to let them know that they've made a mistake.
- **Lose Game** - In addition to the text change in the display area (explained in the previous section), all game buttons flash to provide the user with an additional visual aid to let them know that they've made a mistake.
- **Win Game** - In addition to the text change in the display area (explained in the previous section), all game buttons light up to provide the user with an additional visual aid to let them know that they've won the game. The lights stay lit until the user presses 'START' to start a new game.

### Sounds

- **Game Button Sounds** - I got the sounds for the game buttons from [Free Code Camp](https://www.freecodecamp.org/), and assigned the url link to the relevant button in my script.js file.
- **Game Sounds** - I downloaded the sounds for the game sounds and button clicks from [Zapsplat](www.zapsplat.com) and imported them into my workspace. I then created variables for these sound files in my script.js file.

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
    - The project uses **Jasmine** to automate some testing of my **JavaScript** code.
- [**Git**](https://git-scm.com/)
    - I've used **Git** as a version control system to regularly add and commit changes made to project in Cloud9, before pushing them to GitHub.
- [**GitHub**](https://github.com/)
    - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website/app in a live environment.

## Testing

### Testing User Stories

I used my user stories and documented each of the steps that each user would need to accomplish what they have stated. Below is the link to the document that contains this information:

- [Testing User Stories]()

### Automated Testing



### Responsive Testing

I used Google Chrome's Development tools to constantly test each change that I made to my website and to ensure that it appeared in the desired way on different screen sizes. I also tested my website on different screen sizes (mobile, tablet and desktop) to ensure it appeared in the desired way on different devices.

To test my whole website, I went through each page, feature by feature, and documented the results on a spreadsheet. The spreadsheet also documents any responsive features and confirms that they work and appear as intended on different screen sizes. The link to the spreadsheet it below:

- [Testing Checklist]()

### HTML and CSS Validation

I used the [W3C HTML Validator tool](https://validator.w3.org/#validate_by_input) to validate my HTML code.

I used the [W3C CSS Validator tool](https://jigsaw.w3.org/css-validator/#validate_by_input) to validate my CSS code.

I used the [Esprima Syntax Validator tool](http://esprima.org/demo/validate.html) to validate my JavaScript syntax.

### Interesting Bugs or Problems

- **Burger icon** - The burger icon wasn't appearing once the fullscreen overlay menu was triggered. The reason for this is that the header in which the burger icon was in had a lower z-index than the overlay menu. To fix the issue, I gave the header a higher z-index value than the overlay menu.
- **Burger icon when overlay menu is triggered** - As the header (including the burger icon) is part of the page, it disappears when the user scrolls down while the overlay menu is triggered. The user then has to scroll back to the top of the page for the burger icon to reappear while the overlay menu is triggered. This is another constraint, and I will fix this bug when I learn JavaScript, so that the header remains fixed, only when the overlay menu is triggered.
- **Band card images** - The images automatically take up 100% of the card width, so they appear stretched. I have tried to make the images take up less of the card width, but this throws the alignment out, and it doesn't look as tidy with the scroll bars. This is a constraint and I've decided to leave the images as they are.
- **'dates' attribute** - For the discography timeline, I used the sample code from the code used within the Resume mini project. The sample code used the `dates` attribute. However, the [W3C HTML Validator tool](https://validator.w3.org/#validate_by_input) stated that this was invalid. When I looked on Slack, I saw that another student had the same issue, and the advice they received was to use the `data-year` attribute instead. I tried this and it resolved the issue.
- **'Submit' button on *Book Us* form** - Once I entered the information and submitted the form, the form kept routing me through to the index.html page. After speaking with my mentor, he asked me to check the value of the `action` attribute of the `<form>` element. The issue was that the value I was using was `action="/"`. Once I changed this to `action="contact.html"` the issue was resolved.
- **'Submit' button on *Book Us* form** - Once I entered the information and submitted the form, I kept getting a '405 Not Allowed' error message, but this was only happening in the live environment and not the testing environment. I posted this in the Slack community and was given the advice to change the `method` value to `get` instead of `post`. This resolved the error.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X