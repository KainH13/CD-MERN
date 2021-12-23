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