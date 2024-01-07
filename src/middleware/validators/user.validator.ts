import { body, check, param } from "express-validator";

const validatorUser = [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("O campo email precisa ser preenchido corretamente!"),
  body("name").notEmpty().withMessage("O campo nome é obrigatório!"),
  check("password").notEmpty().withMessage("A senha é obrigatória!"),
];

const validatorUserUpdate = [
  param("id").notEmpty().withMessage("O parametro ID é obrigatório!"),
  body("name").notEmpty().withMessage("O campo nome é obrigatório!"),
  check("password").notEmpty().withMessage("A senha é obrigatória!"),
];

const validatorUserDelete = [
  param("id").notEmpty().withMessage("O parametro ID é obrigatório!"),
];

const validarUserSignIn = [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Para logar é necessario um email valido!"),
  check("password").notEmpty().withMessage("A senha é obrigatória!"),
];

export {
  validatorUser,
  validatorUserUpdate,
  validatorUserDelete,
  validarUserSignIn,
};
