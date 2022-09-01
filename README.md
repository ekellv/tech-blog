# Tech Blog

## Description 

Following the MVC paradigm and using Handlebars as a template, this application is a CMS-style blog similar to Wordpress. 

![Github license](http://img.shields.io/badge/License-MIT-yellow.svg)

[A version of the deployed website can be viewed here.](https://tech-blog-erin-v.herokuapp.com/)

## Contents
1. [About](#about)
      1. [User Story](#user%20story)
      2. [Acceptance Criteria](#acceptance%20criteria)
      3. [Visuals](#visuals)
      4. [Technologies](#technologies)
2. [Installation](#installation)
3. [License](#license)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Testing](#testing)
7. [Authors and Acknowledgements](#authors%20and%20acknowledgements)

## About

Developers can publish blogs and comment on others once they're logged into the blog application. New users can make new accounts to particpate in the tech talk too. Using express session and bycrypt, users can be sure their information is being safely stored in the database between visits to the blog. 

## User Story

```
AS A developer who writes about tech

I WANT a CMS-style blog site

SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria 

```
GIVEN a CMS-style blog site

WHEN I visit the site for the first time

THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; 
and the option to log in

WHEN I click on the homepage option

THEN I am taken to the homepage

WHEN I click on any other links in the navigation

THEN I am prompted to either sign up or sign in

WHEN I choose to sign up

THEN I am prompted to create a username and password

WHEN I click on the sign-up button

THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in

THEN I am prompted to enter my username and password

WHEN I am signed in to the site

THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation

THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post

THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in

THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation

THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post

THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post

THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard

THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation

THEN I am signed out of the site

WHEN I am idle on the site for more than a set time

THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```


## Visuals: 

![]()

## Technologies

* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Express Session](https://www.npmjs.com/package/express-session)
* [Connect Session Sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [Node.js](https://nodejs.org/en/)
* [Bootstrap](https://getbootstrap.com/)
* []()
* []()

## Installation 

Please run the following dependencies to install the application: 

`
npm i
`

## License 

This reposititory is licensed under the MIT license. 

For more information about this license or any others, please visit: [https://choosealicense.com/](https://choosealicense.com/).

## Usage 

After installing dependencies, run ``mysql -u root -p`` and enter the mysql root user password. Then the user must add the database by running ``source db/schema.sql`` and finally ``exit``. Then in the command line ``npm run seed`` must be entered to seed the database. Then, to start the server and the application, run ``npm start``. 

## Contributing 

The repository is not currently accepting contributions. 

## Testing 

The command to run tests on this application is: 

`
No tests are currently installed. 
`

## Authors and Acknowledgements

Built by: Erin Voelker

## Contact Information

* GitHub: [ekellv](https://github.com/ekellv)
* Email: [erinkvoelker@gmail.com](mailto:erinkvoelker@gmail.com)
