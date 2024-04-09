import express from "express"
const app = express();
const apiVersion = "/api/v1"

const coreRouter = require("../routes/index")
const adminRouter = require("../routes/admins")
const projectRouter = require("../routes/project")
const filterRouter = require("../routes/filter")

//routes middleware
app.use(`${apiVersion}/admin`, adminRouter)
app.use(`${apiVersion}/projects`, projectRouter)
app.use(`${apiVersion}/projects/`, filterRouter)

//other routes go here
app.use(`${apiVersion}`, coreRouter)

export = app;
