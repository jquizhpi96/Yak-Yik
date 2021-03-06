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
- Create a Modal for when user decides to delete a post
- keep record of user's likes

<br>

### Libraries and Dependencies

|      Library      | Description                                                                                             |
| :---------------: | :------------------------------------------------------------------------------------------------------ |
|       React       | _Front-end component framework_                                                                         |
| React Router DOM  | _Front-end library to set up routes and links._                                                         |
|   Materials UI    | _Component library for interface styling._                                                              |
| Styled Components | _Component Library for styling written with a mixture of JavaScript and CSS within the same component._ |
|   Ruby on Rails   | _Framework for building back ends with Ruby._                                                           |
|      Bcrypt       | _Library for hashing passwords._                                                                        |
|        JWT        | _Library for creating tokens._                                                                          |

<br>

### Client (Front End)

#### Wireframes

- [link to wireframes](https://xd.adobe.com/view/672f5c8e-fad4-41f7-a06b-0bf421d716b8-327c/)

- Desktop Landing/Login page
  ![image](https://user-images.githubusercontent.com/78034272/113164800-703ad280-920f-11eb-8be2-40c30ec0d362.png)

- Desktop Register Page
  ![image](https://user-images.githubusercontent.com/78034272/113165045-a8daac00-920f-11eb-9cb9-7808eda11d77.png)

- Home Page
  ![image](https://user-images.githubusercontent.com/78034272/113173981-efcc9f80-9217-11eb-890b-6aec42efdae6.png)

- Comments Page
  ![image](https://user-images.githubusercontent.com/78034272/113184356-0fb59080-9223-11eb-9613-16d39056c6ce.png)

- Profile Page
  ![image](https://user-images.githubusercontent.com/78034272/113174518-75504f80-9218-11eb-99a1-a78ef0e0c135.png)

- Edit Post Page
  ![image](https://user-images.githubusercontent.com/78034272/113174152-168ad600-9218-11eb-92d8-3a3f44a565ef.png)

- Mobile Home Page

![image](https://user-images.githubusercontent.com/78034272/113190171-03810180-922a-11eb-90e8-1deac07d8a24.png)

- Mobile Profile Page

![image](https://user-images.githubusercontent.com/78034272/113190199-0a0f7900-922a-11eb-8f21-7f88f0432abe.png)

- Mobile Comments Page

![image](https://user-images.githubusercontent.com/78034272/113189767-8f465e00-9229-11eb-9848-eff9d2e37aba.png)

#### Component Tree

![image](https://user-images.githubusercontent.com/78034272/113180711-0c200a80-921f-11eb-94d8-1765576593fb.png)

#### Component Architecture

```structure

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
   |__ Comments.jsx
   |__ CommentCreate.jsx
   |__ CommentEdit.jsx
   |__ UserProfile.jsx
   |__ UserLikes.jsx

|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ users.js
      |__ posts.js
      |__ comments.js
      |__ userLikes.js

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend Setup       |    H     |     5 hrs      |     4 hrs     |    4 hrs    |
| User authentication |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Seed Data           |    M     |     3 hrs      |     3 hrs     |    3 hrs    |
| Creating Components |    H     |     12 hrs     |     8 hrs     |    8 hrs    |
| CRUD                |    H     |     8 hrs      |    12 hrs     |   12 hrs    |
| Advanced Styling    |    M     |     5 hrs      |     8 hrs     |    8 hrs    |
| Deployment          |    H     |     1 hrs      |     1 hrs     |    1 hrs    |
| TOTAL               |          |     37 hrs     |    39 hrs     |   39 hrs    |

<br>

### Server (Back End)

#### ERD Model

![image](https://user-images.githubusercontent.com/78034272/113192637-fca7be00-922c-11eb-87e9-f838a036d982.png)

<br>

---

## Post-MVP

- Sorting posts from most popular on the home page.
- Only display posts from within a 5 mile radius of the user's location.

## Code Showcase

![image](https://github.com/jquizhpi96/Yak-Yik/blob/main/Screen%20Shot%202021-04-06%20at%209.14.37%20AM.png)

## Code Issues & Resolutions
