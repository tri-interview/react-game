# TRICUSS TECHNICAL INTERVIEW

## Interview Criteria
  1. This test was meant for a range of experience levels.  We will adjust accordingly.
  2. Feel free to ask me questions at any time
  3. Here's the general critiria for this test:
  - Programming basics (react, typescript, api integration)
  - ability to understand other's code, and recognize / write code that follows best practices
  - problem solving / debugging ability
  - communication
  - comfort level throughout the stack
  - creativity


## 0. Setup Project (5m)
  1. Clone from GitHub
  2. Next Js: App Routing explaination
    the url routes match the file structure of /src/app/
      - ex. to reach the api endpoint login, go to localhost/api/login.  This will route to the file /src/app/api/login/route.ts
      - ex. to reach the page 'scoreboard', go to localhost/scoreboard.  This will route to the file /src/app/scoreboard/page.tsx
  3. This is not meant to be a time pressure test.  If you need a bit more time, we can try to accomodate.

## 1. Familiarize yourself with the project (10m)

### Rules
  1. No Internet or AI help (it is unnecessary, more likely to waste time)
  
### Task
  - Spend a few minutes to read the README.md file.  Run the app.  Ask questions as needed.
  - This app will be the basis for our test.
  - Explain to me what the code under /src/app/api/scoreboard/route.js is doing.

## 2. Debugging (20-30m)
  The scoreboard page is broken and incomplete.  Fix what you can in 20 minutes, in the following order.
  1. Scoreboard for all users is broken
  2. User's highest score is not implemented
  3. Scoreboard doesn't correctly list the scores
  4. Implement a list of the user's score history (sorted by date)

### Rules
  1. You are free to use the internet to ask questions.  No AI.
  2. No copy/pasting code from the project.
  3. Install any libraries or packages you wish
  4. You are free use a debugger.

### Hints
  1. Refer back to README.md as necessary

## 3. Refactor (20-30m)

### Rules
  1. Internet use is ok for looking things up.  No AI.
  2. No copy/pasting code from the project.
  
### Task 
  The code for the page /src/app/game/page.tsx was not well written.  Review this person's code and make it "better".  Such as, but not limited to:
  1. Easy to read and maintain
  2. Correct use of basic programming or REACT principles
  3. Modularity
  etc...

### Notes
  1. We are not expecting you to be able to find and implement all issues in the alloted time.  Do what you can.
  2. Make sure to test as you go.  Don't leave yourself in a broken state, as we will continue to use an app.

### Hints
  1. Don't be afraid to add, delete, move files, anywhere in the project.
  2. Don't be afraid to change/move around big chunks of code.
  3. Implement the simple things first.  Make note of the more difficult things, and come back to them later.
  - At the end, you will have a change to tell us what else you would have done given more time.

## 4. Ideas To Improve Product (10m)
Offer suggestions on how we can improve the app.  This could be anything:
  1. UI, UX
  2. Game Features
  3. Technologies used
  4. Different Implementations
  etc...

### Rules
  1. No internet or AI.

### Notes
  1. Don't worry about implementation, we are exploring creatitity and your strengths.

### Hints
  1. Lean on your strengths and the most obvious things that stand out to you.
  2. You are free to use tools to represent your ideas as well
    - hand drawings / mockups / diagrams
    - MS Paint, Figma
    - https://www.canva.com/
    - https://app.diagrams.net/