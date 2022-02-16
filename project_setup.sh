# Project Setup
mkdir newProject
cd newProject
git init
echo node_modules/ > .gitignore
mkdir server

# React Client

# in directory where you wish the project folder to live
npx create-react-app client

# all else must happen in the directory that was created by CRA
cd client

# add packages needed for full stack
npm install axios

# routing
npm install react-router-dom
# or legacy routing
npm install @reach/router --legacy-peer-deps

# add react-bootstrap
npm install react-bootstrap bootstrap@5.1.3

# socket.io
npm install socket.io-client

# start local development server
npm start


# Express / Mongo Server

# setup
cd server
mkdir config controllers models routes
touch server.js
npm init -y

# installing packages
npm install mongoose express cors

# for user authentication
npm i bcrypt
npm install jsonwebtoken
npm install cookie-parser

# for secure environmental variable storage
npm install dotenv

# socket.io
npm install socket.io

# start server
nodemon server.js

# MongoDB

# start server
brew services start mongodb-community@4.4

# to run shell
mongo

# to stop server
brew services stop mongodb-community@4.4

# shutting down if mongod window got closed
ps -ax | grep mongo
sudo kill *process_id*