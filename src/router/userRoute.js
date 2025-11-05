import express, { Router } from "express";
import { login, register } from "../controller/userController.js";

const route = Router();

route.post("/register", register).post("/login", login);

export default route;
