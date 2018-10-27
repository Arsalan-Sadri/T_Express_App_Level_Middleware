const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.send("Middleware is hit!");
});

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () =>
    console.log("App running on http://" + host + ":" + PORT));