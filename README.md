# PlexTech x Songtradr - Learning Sprint Assignment

This project is bootstrapped using [Create React App](https://facebook.github.io/create-react-app).

> Learning Sprint due Monday, February 20, 2023 at 11:59 PM

## Prologue
Hiya Songtradr team, this learning sprint was designed to equip you with the tools to tackle this semester's project. There are three **sections**: Research, Design, and Development. You will undergo these three stages to understand our workflow. 

## Background
Songtradr would like us to implement a dashboard that will show us the interesting parts of the song right of the bat. They have an example  [here](https://gxus927oui.execute-api.eu-central-1.amazonaws.com/taggram/USUG12103663). Feel free to use this dashboard as inspiration for your graphs, but as they noted, these graphs are lackluster as they don't provide us much information quickly and they are not aesthetically pleasing. 

## Objective
You will research, design, and develop a graph visualization using various research websites, Figma, and ReactJS with TypeScript and Songtradr's Musicube API. Don't feel pressured to make it perfect, let your creativity run free, and remember to ask for help when you need it!

## First Steps
1. Open your terminal/command prompt.
2. Use `cd [PATH]` to set your current directory to where you want to place the project folder.
3. Clone the project using `git clone https://github.com/PlexTechIP/songtradr-learning-sprint.git`.
4. Navigate into the project directory using `cd songtradr-learning-sprint`.
2. Switch to a new branch using `git checkout -b [YOUR FIRST NAME]`.
3. You're good to go! Follow the instructions in **Sections** now.

## Sections
1. Visualization Research
    * Complete the steps in `public/RESEARCH.md`.
2. Design Document
    * Once you've completed your visualization research, open [Figma](https://www.figma.com/downloads/) and click for 'Import File'.
    * Head to your project directory, click the public folder, and open `DESIGN.fig`.
    * Create a mock-up of your visualization.
    * See [Figma tutorial](https://www.youtube.com/watch?v=nZ57MPVbHUg) for a quick tutorial.
    * Make sure to group your elements by hierarchy and save your changes!
3. React Implementation
    * Open `src/App.tsx` and implement your design using React TypeScript and the Musicube API!
    * We are using [`yarn`](https://classic.yarnpkg.com/lang/en/docs/cli/) package manager for this project, DO NOT use `npm` or it will conflict with the current setup.
    * Feel free to use any graphing library available (use `yarn add` to install new dependencies).
    * With your current directory being the project, use `yarn install` to install all dependencies and then use `yarn start` to run the app in development mode. \
      Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

      The page will reload if you make edits.\
      You will also see any lint errors in the console.
    * See [React tutorial by Dave Gray](https://www.youtube.com/watch?v=xTVQZ46wc28) for the most updated, quick video on how to get started with React. This will be useful for later, but, mainly you will be using your preferred graphing library to implement your graph.

## Submission
To submit your learning sprint, complete the following steps:
1. Complete `public/RESEARCH.md`, `public/DESIGN.fig`, and `src/App.tsx`.
2. Use `git branch` and making sure that it's your first name.
3. Add your changes by using `git add .`, commit your changes using `git commit -m "MESSAGE"`, and then push your changes using `git push --set-upstream main [BRANCH]`. 
4. Now you're finished! Congratulations on finishing the first sprint for Songtradr.

<!-- DO NOT EDIT THIS DOCUMENT! -->
