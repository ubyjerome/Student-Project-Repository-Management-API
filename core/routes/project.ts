import express from "express"
import projectController from "../modules/project/project.controller"
let project = new projectController()
const router = express.Router();
import { newProjectDTO } from "../modules/project/dto";
import { validate } from "../middlewares/validation";

//CRUD Operations: Done only by admin
router.post("/new", validate(newProjectDTO))

//Search Operations: Done by user

export = router