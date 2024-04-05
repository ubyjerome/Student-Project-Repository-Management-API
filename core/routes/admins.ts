import express, { request, response } from "express";
import adminsController from "../modules/admins/admins.controller";
const router = express.Router();
import { newAdminSchema } from "../modules/admins/schema";
import { validate } from "../middlewares/validation";

router.post("/new",
    validate(newAdminSchema),
    adminsController.createAccount);

router.post("/login", adminsController.login)
router.post("/forgot-password", adminsController.forgotPassword)
router.put('/reset/:token', adminsController.resetPassword)
router.get('/verify-email/:token', adminsController.verifyEmail)

export = router;
