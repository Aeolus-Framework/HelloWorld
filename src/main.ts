import express from "express";
import { default as math } from "./math";

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World.");
});

app.get("/sum/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const sum = math.sum(a, b);
    res.send(`${a}+${b}=${sum}`);
});

app.get("/multiply/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const sum = math.multiply(a, b);
    res.send(`${a}*${b}=${sum}`);
});

app.get("/test", (req, res) => {
    res.send("This was automatically built and deployed by Jenkins. ");
});

app.listen(PORT, HOST);
console.log(`NODE environment is ${process.env.NODE_ENV}`);
console.log(`Running on http://${HOST}:${PORT}`);
