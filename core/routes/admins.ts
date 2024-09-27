import express from "express"
import adminController from "../modules/admins/admins.controller";
let admin = new adminController()
const router = express.Router();
import { loginDTO, newAdminDTO } from "../modules/admins/dto";
import { validate } from "../middlewares/validation";
import { isSuperAdmin } from "../middlewares/adminValidation";

router.post("/new",
    validate(newAdminDTO), isSuperAdmin,
    admin.createAccount.bind(admin)
);


///////// AUTH //////////
router.post("/auth/login",
    validate(loginDTO),
    admin.login.bind(admin)
);

export = router;