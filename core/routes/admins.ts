import express from "express";
import adminsController from "../modules/admins/admins.controller";
const router = express.Router();

router.post("/new", adminsController.createAccount);

export = router;
