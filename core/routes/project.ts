import express from "express"
import projectController from "../modules/project/project.controller"
let Project = new projectController()
const router = express.Router();
import { newProjectDTO } from "../modules/project/dto";
import { validate } from "../middlewares/validation";

//CRUD Operations: Done only by admin
router.post("/new",
    validate(newProjectDTO),
    Project.createProject.bind(Project)
)

//Search Operations: Done by user

export = router