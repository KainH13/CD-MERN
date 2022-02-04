const express = require("express");
const cors = require("cors");
const socket = require("socket.io");

// setting up express
const app = express();
const port = 8000;

// enabling cors and json
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// project specific requirements

const server = app.listen(port, () =>
    console.log(`Listening on port: ${port}`)
);

const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("Welcome socked id: " + socket.id + "*Hand Shake*");

    socket.emit("Welcome", "Well hello there!");
});
