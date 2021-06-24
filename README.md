# Birdie Developer Test

[![Frontend Deploy status](https://github.com/xanwerneck/birdie-test/actions/workflows/frontend-heroku-deploy.yml/badge.svg)](https://birdie-front-end.herokuapp.com/)
[![Backend Deploy status](https://github.com/xanwerneck/birdie-test/actions/workflows/backend-heroku-deploy.yml/badge.svg)](https://birdie-back-end.herokuapp.com/)
[![Frontend CI status](https://github.com/xanwerneck/birdie-test/actions/workflows/frontend-ci.yml/badge.svg)](https://birdie-front-end.herokuapp.com/)
[![Backend CI status](https://github.com/xanwerneck/birdie-test/actions/workflows/backend-ci.yml/badge.svg)](https://birdie-back-end.herokuapp.com/)

Birdie test is an implementation of a challenge in the context of Birdie Company. To know more about Birdie just go to the link [Birdie](https://www.birdie.care/), and all information about the challenge is on [Birdie Github Challenge](https://github.com/birdiecare/birdie-test/). 

The most important parts of the project are located in /frontend and /backend folders. The first one is a React implementation consuming services provided by the second, a Node application.

From the Birdie repository, the **context** is defined by: 

*At Birdie, our app allows care givers to record observations of older adults receiving care, we name them care recipients.*

*These could be anything from the recording of their mood (happy, sad, bored, confused) to what they drank today (1 pint of water).*

Again, from the **challenge description**:

*Your challenge is to clone ... repository and create a small web application to visualize these observations, so that looking at it is valuable to a family member of this care recipient*

## Set up

*Here's the technical stack this boilerplate was made with*. And also, the infrastructure created for **continuous integration**, **continuous deployment**, and **cloud server** to serve the application.

**It's an amazing part** that I wanna talk about this repository, the challenge, and my implementation. At the first time, I was thinking only in the context of the challenge, creating a great customer experience for Birdie clients. For sure, it's really important, but what about some questions?

- Some clients didn't like the first deploy
- Bugs are occurring for some users
- Deploys need to go faster for the customers

To answer that... I built this project taking care at most in a continuous deployment environment, and sure, covering with tests endpoints and components, in a TDD perspective. For the next deployment, we can go really fast with tested codes. 

### Front end

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Back end

- [NodeJS](https://nodejs.org)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)
- [Node MySQL2](https://www.npmjs.com/package/mysql2)

### CI / CD

- [Github actions](https://docs.github.com/pt/actions)

### Deploy server

- [Heroku](https://www.heroku.com/)

### Usage

*The usage description is the same as the challenge description*

1. Start the API. (Run the following commands within the `backend` folder)

   a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run the HTTP server (will start on port `8000`)

   ```bash
   npm run dev
   ```

2. Start the React app  (Run the following commands within the `front-end` folder)

    a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run the application (will start on port `3000`)

   ```bash
   npm start
   ```

### Feedback and support

Please, feel free to contact me about this project, will be a pleasure to talk about it.

### Can be better - To do

- **Coverage of interface tests (eg. App.tsx integration tests)**
I'm looking for, in the next step, to create an integration test for the App.tsx component.
The coverage of frontend tests is in the context of isolated components.
- **UI/UX of the project**
I was really focused on parts of CI/CD, test coverage, and Heroku deploy
Also, I prefer hearing from a PD about some improvements that may I do
- **CI/CD relation**
For the future, I need to make an integration to make sure that CD will run just after CI passed