import express from "express";
import { Configs } from "../configs";
const app = express();
const router = express.Router();
const responseType = require("../utils/serverResponse");

router.get("/", (req, res) => {
  responseType.handleResponse(
    req,
    res,
    {},
    "success",
    `Server is running on port ${Configs.port} 🚀🚀🚀`
  );
});

router.use((req, res, next) => {
  responseType.handleError(
    req,
    res,
    "notFound",
    `The route \"${req.url}\" is not defined`
  );
});

export = router;
