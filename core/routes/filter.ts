import express from "express"
import filterController from "../modules/filter/filter.controller"
let Filter = new filterController()
const router = express.Router();


//Search Operations: Done by user

router.post("/keywords",
    Filter.keywords.bind(Filter)
)
router.post("/title",
    Filter.title.bind(Filter)
)
router.post("/month",
    Filter.month.bind(Filter)
)
router.post("/year",
    Filter.year.bind(Filter)
)
router.post("/author",
    Filter.author.bind(Filter)
)
router.post("/supervisor",
    Filter.supervisor.bind(Filter)
)
router.post("/department",
    Filter.department.bind(Filter)
)
router.post("/created-by",
    Filter.createdBy.bind(Filter)
)

export = router