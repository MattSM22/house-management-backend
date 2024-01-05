import { Request, Response } from "express";
import purchaseTypes from "../types/purchaseTypes";
import { createPurchase } from "../repository/PurchaseRepository";

const createNewPurchase = async (req: Request, res: Response) => {
  const body: purchaseTypes = req.body;

  const responseDatabase = await createPurchase(body);

  if (responseDatabase) {
    return res.status(200).send(responseDatabase);
  } else {
    return res
      .status(406)
      .send({ message: "Error on register this purchase!" });
  }
};

export { createNewPurchase }
