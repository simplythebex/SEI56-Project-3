# Project 3: Heiss

## Project Members
- Ole Nascimento: https://github.com/eintrittfrei
- Daria Kafler: https://github.com/daria-kafler
- Victoria Olanipekun: https://github.com/victoriaolanipekun
- Bex Jones: https://github.com/simplythebex

## Overview

Heiss is an online retailer and community app. Users can purchase teas and coffees from around the world, as well as visit the Heiss room where they can suggest and share drinks they would like to buy in the future. Here visitors can comment on and rate the suggestions of other users.

![Screenshot 2021-08-12 at 14 29 01](https://user-images.githubusercontent.com/73421779/129205268-dfe52eb7-35cf-4a60-9551-d90cd93cc557.png)

## Deployed Version

https://sei56-heiss.herokuapp.com/

Please use the following credentials to explore the app:
- Email: bex@email.com	
- Password:  pass

## Code installation
https://github.com/simplythebex/SEI56-Project-3
Clone or download the repo
Install dependencies by running `npm i` in Terminal

## Brief

Create a full-stack app using Node.js, Express and MongoDB. The app should have CRUD functionality and should contain several models and relationships.

## Timeframe

9 days.

## Technologies

### Planning
- Figma
- Trello

### Backend
- MongoDB/Mongoose
- Express
- Node
### Frontend
- JavaScript
- React
- HTML
- SASS
- Bootstrap

### Other
- Git
- Github

## Approach 

### Planning
Since this was a group project we decided to code the Backend all together as a group, then each take ownership of a Frontend element of the app. Ole did the user profile and detailed drinks page, Daria did the Index page and Navbar, Victoria did the basket and I did the Authentication and Heiss room (suggesting drinks, comments and ratings).

We used Trello to divide all of the tasks:

![Screenshot 2021-08-12 at 12 13 59](https://user-images.githubusercontent.com/73421779/129205350-c5694052-c9eb-452a-b309-ec2ddb831498.png)

### Wireframe
With a background in design Victoria created the wireframe with input from the rest of the team:

![Wireframe ](https://user-images.githubusercontent.com/73421779/129205375-1cb45a3d-6d25-4014-95ea-e30c93677a8a.png)

### Backend
As we had decided to code the Backend together, we took it in turns to write the code, while screen sharing so that the rest of the team could check the code and research any bugs that we encountered. 

Our initial Backend included just the Drinks and User models, however one we were working on the Frontend, both Victoria and I realised that having separate models for our work would make sense. Victoria created the ShoppedDrink model (basket) while I created the SuggestedDrink model (this was required for the Heiss room feature).

To create the SuggestedDrink model I used both embedded and referenced data. The owner was added as embedded data as shown:

<img width="924" alt="suggested-drinks model" src="https://user-images.githubusercontent.com/73421779/129205492-f9ed2474-8a00-4aa5-8440-3bb5d2573974.png">

In the Users model I then referenced the drinks so that a profile could show the suggested drinks that were created by that user:

<img width="869" alt="user model" src="https://user-images.githubusercontent.com/73421779/129205569-510a52df-0659-48e8-a6d5-f5d196c582fc.png">

Another example of reference data was the comments and ratings, which were referenced in the SuggestedDrink model, meaning that for each drink the comments and ratings associated could be viewed:

<img width="985" alt="comments and ratings" src="https://user-images.githubusercontent.com/73421779/129205729-7dd5af6f-23b8-4cc3-a116-692446c8b6a8.png">

As I was changing the Backend without input from my team I ensured I commented the code so that they would be able to understand and refer to the code if required. 

### Frontend
After creating the Backend we proceeded to each take ownership of a section of the Frontend. We created the React App and began working on our own tasks. 

For the Heiss Room I wanted the page to display a newsfeed similar to that of Facebook: 

![Screenshot 2021-08-12 at 12 46 05](https://user-images.githubusercontent.com/73421779/129205809-8059a30c-6423-49bb-80e8-1d3cc18f1e44.png)

New drinks that are suggested are displayed at the top of the page, and users are able to view the comments and an average rating for the drink. 

To display the data I used an Axios GET request to the suggested-drinks API. This returns an array of drinks, therefore I used the map function to iterate over each drink and create an individual card for each.

The Axios request:

<img width="966" alt="axios request" src="https://user-images.githubusercontent.com/73421779/129205896-8294c56e-4dfd-4801-aa85-76b04c549e1f.png">

Displaying each drink:

<img width="938" alt="displaying drinks" src="https://user-images.githubusercontent.com/73421779/129205956-acd39edb-6df4-4ffc-9ffc-f9612a63eb1d.png">

If the user is logged in they are able to comment and rate themselves, however if they are not logged in this option is not displayed.

To allow for this I used a ternary operator to check whether the user is authenticated and to change the display based on this:

<img width="844" alt="ternary authentication" src="https://user-images.githubusercontent.com/73421779/129206065-0b90765c-a025-4796-b333-a9496c1efbe8.png">

When the user submits a comment and rating, the data is sent via a POST request, with the token to ensure that the user is authenticated:

<img width="886" alt="POST request" src="https://user-images.githubusercontent.com/73421779/129206159-823c61f7-d187-41a8-bca6-85ac0af47037.png">

## Wins

Planning: We had a lot that we wanted to get done, so spending time together planning the project meant that we knew what was required and the timeframe in which we had to complete it.

Teamworking: We were able to efficiently code together whilst working remotely, and all learnt to use Git branches at the same time. We managed to streamline merging our work to avoid any issues in Git, and enjoyed coming together as a team.

Styling: We wanted to use a bright and playful colour palette for this project, which we have definitely achieved! I think the imagery that we chose is beautiful and makes the app very inviting. 

## Challenges

Planning: While we took our time planning the Backend and Frontend we did not originally factor in styling which led to some confusion and to styles being overwritten. To resolve this we made sure that we were very specific in our class names, to avoid the same name being used twice, however if I were to re-do this project I would create a separate SASS file for each component.

## Bugs
- Error handling on forms needs improvements.
- Styling on some pages isn’t showing correctly on large screen sizes.
- Heiss Room does not re-render when comments/ratings are added.

## Key Learnings

- The difference between embedded and referenced data.
- Using MongoDB/Mongoose and building a Backend from scratch.
- How to communicate and work efficiently within a team.

## Future Improvements

- Add a map feature: Something that was on our original plan, we wanted users to be able to pick drinks on a map.
- Styling of the basket and making the basket accessible in the Navbar.
- Responsiveness: Ensuring the app is responsive across all pages.

