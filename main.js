"use strict";

import express from "express";

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World.");
});

app.get("/test", (req, res) => {
    res.send("This was automatically built and deployed by Jenkins.");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
