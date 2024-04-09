import express from "express"
const app = express();
const apiVersion = "/api/v1"

const coreRouter = require("../routes/index")
const adminRouter = require("../routes/admins")
const projectRouter = require("../routes/project")
const filterRouter = require("../routes/filter")
const filterRouterV2 = require("../routes/filter.v2")

//routes middleware
app.use(`${apiVersion}/admin`, adminRouter)
app.use(`${apiVersion}/projects`, projectRouter)
app.use(`${apiVersion}/projects/search`, filterRouter)

//v2 Routes
app.use("/api/v2/projects", filterRouterV2)


//other routes go here
app.use(`${apiVersion}`, coreRouter)

export = app;
