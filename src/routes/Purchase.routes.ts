import { Router } from "express";
import { createNewPurchase } from "../controller/PurchaseController";

const purchaseRoutes = Router();

purchaseRoutes.post("/create", createNewPurchase)

export default purchaseRoutes;