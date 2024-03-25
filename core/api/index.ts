import express from "express";
const app = express();
const apiVersion = "/api/v1"

const coreRouter = require("../routes/index")
const adminRouter = require("../routes/admins")

//Other routes go here
app.use(`${apiVersion}/admin`, adminRouter)
app.use(`${apiVersion}`, coreRouter)

export = app;
