const express = require("express");
const app = express();

// coding some test users
const users = [
  { firstName: "Dashito", lastName: "Burrito" },
  { firstName: "Milo", lastName: "Plopski" },
  { firstName: "Freya", lastName: "Cat" },
  { firstName: "Zipper", lastName: "Dipper" },
  { firstName: "Mitzi", lastName: "Katze" },
];

// adding ability to access POST data -- express middleware functions
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Testing API transmission!" });
});

// get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  // form data from Postman or React
  console.log(req.body);
  // we can add it to the users array for now, but later this will go into the DB
  users.push(req.body);
  // we always need to respond with something
  res.json( { status: "ok" } );
});

// get by id
app.get("/api/users/:id", (req, res) => {
  // we can get the id variable set up above from req.params
  console.log(req.params.id);
  // assuming this id is the index of the user in the users array
  res.json( users[req.params.id] );
});

// updating using a PUT request
app.put("/api/users/:id", (req, res) => {
  // get id from req.params
  const id = req.params.id;
  // then we can replace the user at that id with the req.body in our PUT request
  users[id] = req.body;
  // always need to respond with something
  res.json( { status: "ok" } );
});

// deleting data with a DELETE request
app.delete("/api/users/:id", (req, res) => {
  // get id from req.params
  const id = req.params.id;
  // use id to remove user at that index
  users.splice(id, 1);
  // always respond with something
  res.json( { status: "ok" } );
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
