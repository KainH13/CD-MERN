const express = require("express");
const faker = require("faker");

const app = express();

const createUser = () => {
  const newUser = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }
  
  return newUser;
}

const createCompany = () => {
  const newCompany = {
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }

  return newCompany;
}

app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  const result = {
    user: createUser(),
    company: createCompany()
  }

  res.json(result);
});


const server = app.listen(8000, () =>
  console.log(`Server up and listening on port ${server.address().port}!`)
);