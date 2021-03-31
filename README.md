# Yak Yik
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)


## Overview

**Yak Yik** is a social media smartphone application based on a discontinued app, Yik Yak, that allows people to create and view discussion threads while being anonymous. All users have the ability to contribute to the app by writing, responding, and liking posts. Yak Yik is built on a Ruby on Rails backend and React front end.

<br>

## MVP
_The MVP for Yak Yik will feature user authentication with signup and login and full CRUD._

<br>

### Goals

- User authentication
- Full CRUD
- User associations with posts, comments, and likes
- Create a Modal for when user decides to delete a post or comment
- keep record of user's likes 

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end component framework_ |
|   React Router   | _Fron-end library to set up routes and links._ |
|   Materials UI   | _Component library for interface styling._ |
| Styled Components| _Component Library for styling written with a mixture of JavaScript and CSS within the same component._ |
|  Ruby on Rails   | _Framework for building back ends with Ruby._ |
|     Bcrypt       | _Library for hashing passwords._ |
|       JWT        | _Library for creating tokens._ |



<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

![image](https://user-images.githubusercontent.com/78034272/113087194-1c010580-91b1-11eb-98fd-a2bc106021b7.png)



#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ components/
   |__ Modal.jsx
|__ layout/
   |__ Nav.jsx
   |__ Layout.jsx
   |__ Footer.jsx
|__ Containers 
   |__ MainContainer.jsx
|__ screens/
   |__ Login.jsx
   |__ Register.jsx
   |__ Posts.jsx
   |__ Post.jsx
   |__ PostCreate.jsx
   |__ PostEdit.jsx
   |__ Comment.jsx
   |__ CommentCreate.jsx
   |__ CommentEdit.jsx
   |__ UserProfile.jsx
   
                 
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ users.js
      |__ posts.js
      |__ comments.js
      |__ likes.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|   Backend Setup     |    H     |     5 hrs      |      TBD      |     TBD     |
| User authentication |    H     |     3 hrs      |      TBD      |     TBD     |
|     Seed Data       |    M     |     3 hrs      |      TBD      |     TBD     |
| Creating Components |    H     |     12 hrs     |      TBD      |     TBD     |
|        CRUD         |    H     |     8 hrs      |      TBD      |     TBD     |
|   Advanced Styling  |    M     |     5 hrs      |      TBD      |     TBD     |
|     Deployment      |    H     |     1 hrs      |      TBD      |     TBD     |
| TOTAL               |          |     37 hrs     |      TBD      |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![image](https://user-images.githubusercontent.com/78034272/113075731-85761980-919b-11eb-8384-bca846c5444c.png)


<br>

***

## Post-MVP
- Sorting posts from most popular on the landing page.
- Only display posts from within a 5 mile radius of the user's location.


## Code Showcase


## Code Issues & Resolutions

