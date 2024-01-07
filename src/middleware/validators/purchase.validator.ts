import { body, param } from "express-validator";

const validatorPurchase = [
  body("user_id")
    .notEmpty()
    .withMessage("É necessário um id de usuário para realizar cadastros!"),
  body("product").notEmpty().withMessage("O produto é um campo obrigatório!"),
  body("price")
    .isFloat()
    .notEmpty()
    .withMessage("O preço é obrigatório e precisa ser um decimal!"),
  body("quantity")
    .isNumeric()
    .notEmpty()
    .withMessage("A quantidade é obrigatória e precisa ser um numero!"),
];

const validatorPurchaseUpdate = [
  param("id")
    .notEmpty()
    .withMessage("É necessário um id de usuário para realizar cadastros!"),
  body("user_id")
    .notEmpty()
    .withMessage("É necessário um id de usuário para realizar cadastros!"),
  body("product").notEmpty().withMessage("O produto é um campo obrigatório!"),
  body("price")
    .isFloat()
    .notEmpty()
    .withMessage("O preço é obrigatório e precisa ser um decimal!"),
  body("quantity")
    .isNumeric()
    .notEmpty()
    .withMessage("A quantidade é obrigatória e precisa ser um numero!"),
];

const validatorPurchaseDelete = [
  param("id")
    .notEmpty()
    .withMessage("É necessário um id de usuário para realizar cadastros!"),
];

export { validatorPurchase, validatorPurchaseUpdate, validatorPurchaseDelete };
