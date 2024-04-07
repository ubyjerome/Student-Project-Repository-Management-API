import express from "express"
import adminController from "../modules/admins/admins.controller";
let admin = new adminController()
const router = express.Router();
import { newAdminDTO } from "../modules/admins/dto";
import { validate } from "../middlewares/validation";

router.post("/new",
    validate(newAdminDTO),
    admin.createAccount.bind(admin));

router.post("/login",
    validate(newAdminDTO),
    admin.login)
    
router.post("/forgot-password", admin.forgotPassword)
router.put('/reset/:token', admin.resetPassword)
router.get('/verify-email/:token', admin.verifyEmail)

export = router;