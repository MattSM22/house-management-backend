import { Request, Response } from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  loginUser,
  updateUser,
} from "../repository/UserRepository";
import userTypes from "../types/userTypes";

const createUser = async (req: Request, res: Response) => {
  const body: userTypes = req.body;
  const responseDatabase = await createNewUser(body);

  if (responseDatabase) {
    return res.status(200).send(responseDatabase);
  } else {
    return res.status(406).send({ message: "Error on create user!" });
  }
};

const signUp = async (req: Request, res: Response) => {
  const body: userTypes = req.body;

  const responseDatabase = await loginUser(body);

  if (responseDatabase) {
    return res.status(200).send({ message: "Login has made with successful." });
  } else {
    return res.status(406).send({ message: "Error on login!" });
  }
};

const listUser = async (req: Request, res: Response) => {
  const responseDatabase = await getAllUsers();

  if (responseDatabase) {
    return res.status(200).send(responseDatabase);
  } else {
    return res.status(406).send({ message: "No have records about users!" });
  }
};

const alterUser = async (req: Request, res: Response) => {
  const idUser: string = req.params.id;
  const body: userTypes = req.body;

  const responseDatabase = await updateUser(idUser, body);

  if (responseDatabase) {
    return res.status(200).send(responseDatabase);
  } else {
    return res.status(406).send({ message: "Error on update this user!" });
  }
};

const removeUser = async (req: Request, res: Response) => {
  const idUser: string = req.params.id;

  const responseDatabase = await deleteUser(idUser);

  if (responseDatabase) {
    return res.status(200).send({ message: "User removed." });
  } else {
    return res.status(406).send({ message: "Error removing user!" });
  }
};

export { createUser, listUser, alterUser, removeUser, signUp };
