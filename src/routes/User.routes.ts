import { Router } from "express";
import {
  alterUser,
  createUser,
  listUser,
  removeUser,
  signIn,
} from "../controller/UserController";
import {
  validatorUser,
  validatorUserUpdate,
  validatorUserDelete,
  validarUserSignIn
} from "../middleware/validators/user.validator";

const userRoutes = Router();

userRoutes.get("/list", listUser);
userRoutes.post("/login", validarUserSignIn, signIn);
userRoutes.post("/create", validatorUser, createUser);
userRoutes.put("/alter/:id", validatorUserUpdate, alterUser);
userRoutes.delete("/remove/:id", validatorUserDelete, removeUser);

export default userRoutes;
