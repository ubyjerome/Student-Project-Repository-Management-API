import express from "express";
import adminsController from "../modules/admins/admins.controller";
const router = express.Router();

router.post("/new", adminsController.createAccount);
router.post("/login", adminsController.login)
router.post("/forgot-password", adminsController.forgotPassword)
router.put('/reset/:token', adminsController.resetPassword)
router.get('/verify-email/:token', adminsController.verifyEmail)

export = router;
