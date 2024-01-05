import { Router } from "express";
import {
  alterUser,
  createUser,
  listUser,
  removeUser,
  signUp,
} from "../controller/UserController";

const userRoutes = Router();

userRoutes.get("/list", listUser);
userRoutes.post("/login", signUp);
userRoutes.post("/create", createUser);
userRoutes.put("/alter/:id", alterUser);
userRoutes.delete("/delete/:id", removeUser);

export default userRoutes;
