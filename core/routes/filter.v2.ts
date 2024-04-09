import express from "express"
import filterController from "../modules/filter/filter.controller"
import { validate } from "../middlewares/validation";
import { searchFilterDTO } from "../modules/filter/dto";
let Filter = new filterController()
const router = express.Router();


//Search Route
router.post("/search",
    validate(searchFilterDTO),
    Filter.searchDecider.bind(Filter)
)


export = router