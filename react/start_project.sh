# React Front End

# in directory where you wish the project folder to live
npx create-react-app [your-project-name-here]

# all else must happen in the directory that was created by CRA
cd [your-project-name-here]

# add packages needed for full stack
npm install axios
npm install @reach/router --legacy-peer-deps

# add react-bootstrap
npm install react-bootstrap bootstrap@5.1.3

# start local development server
cd [your-project-name-here]
npm start


# Express Back End
npm install express

# MongoDB
# start server
brew services start mongodb-community@4.4

# to run shell
mongo

# to stop server
brew services stop mongodb-community@4.4

# shutting dwon if mongod window got closed
ps -ax | grep mongo
sudo kill *process_id*