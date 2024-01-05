import { PrismaClient } from "@prisma/client";
import purchaseTypes from "../types/purchaseTypes";

const prisma = new PrismaClient({
  log: ["query", "error"],
});

const createPurchase = async (purchaseData: purchaseTypes) => {
  const insertPurchase = await prisma.purchase.create({
    data: purchaseData,
  });

  if (!insertPurchase) return false;

  return insertPurchase;
};

const listPurchase = async () => {
  const list = await prisma.purchase.findMany();

  if (!list) return false;

  return list;
};

export { createPurchase, listPurchase }
