import express from "express";
import { Configs } from "../configs";
import serverResponse from "../utils/serverResponse";
const router = express.Router();

router.get("/", (req, res) => {
  serverResponse.handleResponse(
    req,
    res,
    {},
    "success",
    `Server is running on port ${Configs.project.port} 🚀🚀🚀`
  );
});

router.use((req, res, next) => {
  serverResponse.handleError(
    req,
    res,
    "notFound",
    `a ${req.method} route ${req.originalUrl} is not defined`
  );
});

export = router;
