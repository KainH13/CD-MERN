const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

// enabling cors and json
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// project specific requirements
require("./config/mongoose.config");
require("./routes/person.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
