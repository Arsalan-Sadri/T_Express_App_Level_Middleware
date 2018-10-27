const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("For any type of HTTP requests at any path this function gets executed!");
    next();
});

app.use("/user/:id", (req, res) => {
    console.log(`"Request method: ${req.method}"`);
    res.send(req.params.id);
});

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () =>
    console.log("App running on http://" + host + ":" + PORT));