import express from "express";
import usersController from "../controllers/usersController.js";

const router = express.Router();

router.route("/").get(usersController.getUsers);

export default router;
