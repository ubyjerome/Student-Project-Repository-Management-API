import express from "express"
import projectController from "../modules/project/project.controller"
import { newProjectDTO, updateProjectDTO } from "../modules/project/dto";
import { validate } from "../middlewares/validation";
import { validateProject } from "../middlewares/projectValidation";

let Project = new projectController()
const router = express.Router();

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
    validateProject,
    Project.getOneProject.bind(Project)
)

router.get("/title/:title",
    Project.getOneByTitle.bind(Project)
)

export = router