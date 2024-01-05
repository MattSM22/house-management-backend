import { PrismaClient } from "@prisma/client";
import userTypes from "../types/userTypes";

const prisma = new PrismaClient({
  log: ["query", "error"],
});

const loginUser = async (body: userTypes) => {
  const login = await prisma.user.findFirst({
    where: {
      AND: [{ email: body.email, password: body.password }],
    },
  });

  if (!login) return false;

  return login;
};

const createNewUser = async (body: userTypes) => {
  const createData = await prisma.user.create({
    data: body,
  });

  if (!createData) return false;

  return createData;
};

const getAllUsers = async () => {
  const getAll = await prisma.user.findMany();

  if (!getAll) return false;

  return getAll;
};

const updateUser = async (idUser: string, userData: userTypes) => {
  const updatedUser = await prisma.user.update({
    data: userData,
    where: { id: idUser },
  });

  if (!updatedUser) return false;

  return updatedUser;
};

const deleteUser = async (idUser: string) => {
  const deletedUser = await prisma.user.delete({
    where: {
      id: idUser,
    },
  });

  if (!deletedUser) return false;

  return deletedUser;
};

export { createNewUser, getAllUsers, updateUser, deleteUser, loginUser };
