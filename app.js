const express = require("express");
const router = require("./Routes/routes-3");

const app = express();

// The middleware function is executed every time 
// the app receives any type of http requests (GET, PUT,...).
app.use((req, res) => {
    res.send("Middleware is hit!");
});

// The function is executed for any type of HTTP request on the /user/:id path.

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () => console.log("App running on http://" + host + ":" + PORT));