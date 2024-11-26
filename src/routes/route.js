import express from "express";
import apiController from "../controller/apicontroller.js";
const router = express.Router();

router.get("/", apiController.verificar).post("/", apiController.recibir);

export default router;
