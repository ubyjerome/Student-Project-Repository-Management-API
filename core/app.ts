import express from "express";
import { Configs } from "./configs";
import { initializeDatabase } from "./database";
import cors from "cors";
import logger from "./utils/logger";
const app = express();
const api = require("./api");
const port = Configs.project.port

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(api);

app.listen(port, async () => {
  logger.info(`${Configs.project.name}`)
  logger.info(`Server initiated on port ${port}`)
  await initializeDatabase();
  logger.info(`Server now listening on port ${port}`)
});
