# eCommerce

## Description 
This application contains a mySQL database and a backend for an E-commerce platform. 
## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#Tests)
- [Recordings](#Recordings)

## Installation
- Clone the repository locally
- Open terminal and cd to the home directory of the repository
- Use `npm install` to install all the required packages (MySQL2, Sequelize, dotenv, Express.js)
## Usage 
- Create a .env file and supply the DB_NAME (ecommerce_db), DB_PW (insert PW), DB_USER (insert user)
- Run `mysql -u -root -p` and answer prompt
- Use `source db/schema.sql` to create the database
- Use `quit` to exit the mySQL terminal
- Use `npm run seed` to seed the database
- Use `npm run start` to start the server
## Recordings 
https://github.com/tomygoi/eCommerce/assets/120353691/688a9474-67cc-4db6-a43e-dcbf54242a96
## Credit
- https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html 
- https://sequelize.org/docs/v6/getting-started/ 
- https://www.npmjs.com/package/dotenv 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 
