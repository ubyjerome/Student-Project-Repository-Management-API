import express from "express";
const app = express();
const apiVersion = "/api/v1"

const coreRouter = require("../routes/index")

//Other routes go here
app.use(`${apiVersion}`, coreRouter)

export = app;
