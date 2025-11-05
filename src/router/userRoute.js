import express, { Router } from "express";
import { login, register, salaryCheck } from "../controller/userController.js";

const route = Router();

route.post("/register", register).post("/login", login).get("/salary",salaryCheck)

export default route;
