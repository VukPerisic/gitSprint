# React Learning Sprint

> Due Monday, September 25, 2023 at 11:59 PM

## Objective
The project is meant to give you a refresher on aspects of React like props, functional components, state variables, and using dependencies. Don't feel pressured to make it perfect and remember to ask for help when you need it!

## First Steps
1. Open your terminal/command prompt.
2. Use `mkdir [NAME]` and `cd [NAME]` to set your current directory to where you want to place the project folder.
3. Clone the project using `git clone https://github.com/VukPerisic/gitSprint.git`.
4. Navigate into the project directory using `cd gitSprint`.
2. Switch to a new branch using `git checkout -b [YOUR FIRST NAME]`.
3. You're good to go! Follow the instructions below now.

## Overview
You will be creating a basic React app that shows a MainPage component with a button displaying the text "Generate Post". 
When a user clicks the button, your app will 
1. Make a fetch call to the JSONPlaceholder API to get a dummy user post.
2. Render a new Post component under the button that displays the fetched data as text.

You can use any method you like for this, but we will have suggestions for each part of the project below.

## Sections
* Please use `npm install` when starting the project and for any dependencies you want to use.
  
1. MainPage component
    * This will be the component displayed when the app loads. At first, there should only be a button with the text "Generate Post" visible on the page.
    * Use Material UI's pre-built button component https://mui.com/material-ui/react-button/ as your button component. 
    * There should be a handleClick() function defined in MainPage that contains the logic for generating a new post.
    * If the user clicks the button multiple times, there should be MULTIPLE posts rendered sequentially
      (i.e. first click generates post 1, second click generates a different post below the first one).

    * Suggestions 
      - To render multiple posts you can keep an array of post "id numbers" as a state variable, update it on each button click, and use forEach() to map through the array and render the Post components.
      - You can pass in a number as a prop to the Post component and use that in your API call inside the Post component to fetch a unique post.
        
2. Post component 
    * You should make a fetch call to the JSONPlaceholder API to get the text for a post https://jsonplaceholder.typicode.com/guide/
    * A new post should be returned for each click (one way to do this is to increment a state variable in MainPage, pass it as a prop to Post, and use it in the API call). 
    * You don't need much styling here, a simple container showing the post's text is fine!
    

## Submission
To submit your learning sprint, complete the following steps:
1. Create components for Post and MainPage with the functionality described in the above sections. 
2. Use `git branch` and making sure that it's your first name.
3. Add your changes by using `git add .`, commit your changes using `git commit -m "MESSAGE"`, and then push your changes using `git push --set-upstream main [YOUR_BRANCH]`. 
4. And that's it, congratulations on finishing the second learning sprint!.

<!-- DO NOT EDIT THIS DOCUMENT! -->
