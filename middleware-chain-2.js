const express = require("express");
const app = express();

app.use("/user/:id", (req, res, next) => {
    console.log(`"Request method: ${req.method}"`);
    next();
}, (req, res, next) => {
    console.log(`"Request URL: ${req.originalUrl}"`);
    res.send(req.params.id);
});

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () =>
    console.log("App running on http://" + host + ":" + PORT));