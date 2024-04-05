import express from "express";
import { Configs } from "../configs";
const router = express.Router();
const responseType = require("../utils/serverResponse");

router.get("/", (req, res) => {
  responseType.handleResponse(
    req,
    res,
    {},
    "success",
    `Server is running on port ${Configs.project.port} 🚀🚀🚀`
  );
});

router.use((req, res, next) => {
  responseType.handleError(
    req,
    res,
    "notFound",
    `a ${req.method} route ${req.originalUrl} is not defined`
  );
});

export = router;
