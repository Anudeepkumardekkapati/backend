import getstudentdetailes from "../controllers/studentcontrollers.js";
import express from "express";
const router = express.Router(); 
router.get('/student-detailes',getstudentdetailes);

export default router;
