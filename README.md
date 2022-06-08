# Riddleeey

[Live Demo](https://harunfr.github.io/riddleeey/) :point_left:

This is a riddle app, gets riddles from a [rest api](https://github.com/harunfr/riddleeey8000/) and serves it using Wordle's interface which is quite popular game at the moment.

![Snapshot of Game](./riddleeey.gif)

## Differences From Wordle Default Logic:
* Answer length varies between 3 and 14 (included) instead of 5.
* No word list is used.
* Game will not accept previously entered answer.

### Flow of Game
* Game picks a random riddle from riddles api.
* Prevent user input until game is ready.
* Player makes a guess in first turn and can give answer with any length.

#### Game behaves differently in first turn.
* Longer answers will be cut to the length of answer.
* Shorter answer's letters will be marked as empty input.

#### Next turns:
* Length is fixed to answer's length.
* User has 6 chances to guess answer in total.

After end of the game, user can play new round easily with just one button click.

---
### More Technical Parts of Application.
Game logic is isolated. This helps creating modular structure.
* Game logic does all calculations about game.
* Logic between UI and game handles invalid inputs, resetting game
* UI logic only projects current game data to screen.

Made it using test driven development, which made refactors and adding new features cheap, also gave me confidence.

### Encountered Bugs & Bad Practices
* Suprisingly, infinite color change animation is expensive. Constantly 25% to 35% cpu usage just for color change animation on my pc. Implemented bouncing animation instead on letters with finite amount.
* Useref hook should be used carefully, because it is synchronous and can easily damage natural asynchronous flow of application.

* Using usual syntax of animation keyframes in styled components causes some weird bug which doesn't let changing styles of components.
---
#### Clone, Browse, Build, Run.
```markdown
		git clone git@github.com:harunfr/riddleeey.git && cd riddleeey/ && code . && npm i && npm start
```