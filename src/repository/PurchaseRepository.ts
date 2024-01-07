import { PrismaClient } from "@prisma/client";
import purchaseTypes from "../types/purchaseTypes";

const prisma = new PrismaClient({
  log: ["query", "error"],
});

const insertPurchase = async (purchaseData: purchaseTypes) => {
  const insert = await prisma.purchase.create({
    data: purchaseData,
  });

  if (!insert) return false;

  return insert;
};

const selectPurchase = async () => {
  const list = await prisma.purchase.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        }
      }
    }
  });

  if (!list) return false;

  return list;
};

const updatePurcharse = async (idPurchase: string, purchaseData: purchaseTypes) => {
  const updated = prisma.purchase.update({
    data: purchaseData,
    where: {
      id: idPurchase
    }
  });

  if (!updated) return false;

  return updated;
};

const deletePurchase = async (idPurchase: string) => {
  const deleted = prisma.purchase.delete({
    where: {
      id: idPurchase
    }
  });

  if (!deleted) return false

  return deleted;
};

export { insertPurchase, selectPurchase, updatePurcharse, deletePurchase }
