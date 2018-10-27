const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.send("For any type of HTTP requests at any path this function gets executed!");
});

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () =>
    console.log("App running on http://" + host + ":" + PORT));