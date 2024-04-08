import express from "express"
import projectController from "../modules/project/project.controller"
let Project = new projectController()
const router = express.Router();
import { newProjectDTO, updateProjectDTO } from "../modules/project/dto";
import { validate } from "../middlewares/validation";
import { validateProject } from "../middlewares/projectValidation";

//CRUD Operations: Done only by admin
router.post("/new",
    validate(newProjectDTO),
    Project.createProject.bind(Project)
)

router.delete("/delete/:projectId",
    validateProject,
    Project.deleteProject.bind(Project)
)

router.put("/update/:projectId",
    validateProject,
    validate(updateProjectDTO),
    Project.updateProject.bind(Project)
)

router.get("/all",
    Project.getAllprojects.bind(Project)
)

router.get("/:projectId",
    Project.getOneProject.bind(Project)
)

//Search Operations: Done by user

export = router