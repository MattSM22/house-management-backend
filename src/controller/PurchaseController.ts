import { Request, Response } from "express";
import purchaseTypes from "../types/purchaseTypes";
import {
  deletePurchase,
  insertPurchase,
  selectPurchase,
  updatePurcharse,
} from "../repository/PurchaseRepository";

const createPurchase = async (req: Request, res: Response) => {
  const body: purchaseTypes = req.body;

  const responseDatabase = await insertPurchase(body);

  if (responseDatabase) {
    return res.status(200).send(responseDatabase);
  } else {
    return res
      .status(406)
      .send({ message: "Error on register this purchase!" });
  }
};

const listPurchase = async (req: Request, res: Response) => {
  const responseDatbase = await selectPurchase();

  if (responseDatbase) {
    return res.status(200).send(responseDatbase);
  } else {
    return res.status(406).send({ message: "Have no one register!" });
  }
};

const alterPurchase = async (req: Request, res: Response) => {
  const idPurchase = req.params.id;
  const body: purchaseTypes = req.body;

  const responseDatabase = await updatePurcharse(idPurchase, body);

  if (responseDatabase) {
    return res.status(200).send(responseDatabase);
  } else {
    return res.status(406).send({ message: "No one register are affected!" });
  }
};

const removePurchase = async (req: Request, res: Response) => {
  const idPurchase = req.params.id;

  const responseDatabase = await deletePurchase(idPurchase);

  if (responseDatabase) {
    return res.status(200).send({ message: "This record are deleted!" });
  } else {
    return res.status(406).send({ message: "An error ocurred on remotion!" });
  }
};

export { createPurchase, listPurchase, alterPurchase, removePurchase };
