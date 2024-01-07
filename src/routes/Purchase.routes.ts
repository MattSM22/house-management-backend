import { Router } from "express";
import {
  createPurchase,
  listPurchase,
  alterPurchase,
  removePurchase,
} from "../controller/PurchaseController";
import {
  validatorPurchase,
  validatorPurchaseUpdate,
  validatorPurchaseDelete,
} from "../middleware/validators/purchase.validator";

const purchaseRoutes = Router();

purchaseRoutes.post("/create", validatorPurchase, createPurchase);
purchaseRoutes.get("/list", listPurchase);
purchaseRoutes.put("/alter/:id", validatorPurchaseUpdate, alterPurchase);
purchaseRoutes.delete("/remove/:id", validatorPurchaseDelete, removePurchase);

export default purchaseRoutes;
