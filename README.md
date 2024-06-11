# MarMory

## A Marvel Memory Game

## Routes / Endpoints

| METHOD | ENDPOINT         | USAGE                                 | RETURNS                                                  |
|--------|------------------|---------------------------------------|----------------------------------------------------------|
| GET    | `/api/v1/scores` | Get all the scores from the database  | An array of object with `{ id, player, score }`          |
| POST   | `/api/v1/scores` | Add a new score to the database       | An object with the `{ player, score }` of the added score|
------------------

## Data Structures 

### Card objects to be placed in an array and have the following structure; 

```
{

id: (starting at 0 and incrementing to however many cards)
img: (a string that references the image folder in the public folder will look like '/images/whatever.jpeg')
name: (the name of the image this along with the img src should be duplicated for pairs)
isHidden : True

}
```

This array of objects can be put in a .js file and exported to be used in the reducer.

A secondary task once these objects are created would be to look into how to create a random shuffle of this array so that the index is randomised per game. 


### Score will be a simple object of just name and score with a an incrementing ID when inserted into the DB

```
{

name: Niko,
score: 808

}

```

Back end tasks include setting up DB functions for insert and select to add a highscore and to get all highscores. These will need server side routes as well as API calls so that they can be sent from the front end. I believe for reference the react-to-web-api excercise from last Tuesday was about creating those routes and functions. You can use insomnia to run your requests on the server and the API to test they're working before we connect to the front end. 

### Reducers

There will be at least two reducers one for flipping the cards and one for matching the pairs, and potentially on for keeping track of the score though potentially or very likely that can just be a local state in React. A third reducer may be used for dispatching the thunk to send the score and get the high scores list. 
