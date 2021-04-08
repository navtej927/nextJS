const express = require("express");

const app = express();

const news = [
    {
        title: "news article 1",
        description: "this is the description of news1 "
    },
    {
        title: "news article 2",
        description: "this is the description of news1 "
    }
]

app.get("/api/v1/news", (req, res, next) => {
    console.log("get: /news");
    res.status(200).send({ data: news });
});

app.get("/api/v1/static", (req, res, next) => {
    console.log("GET: /static");
    res.send({ data: "static content v1" });
});

app.get("/", (req, res, next) => {
    console.log("get: /news");
    res.status(200).send({ meta: "microservice" });
});

module.exports = { app };