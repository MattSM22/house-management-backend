import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/User.routes";
import purchaseRoutes from "./routes/Purchase.routes";

const app = express();

app.use(express.json()); // Define JSON como recebimento de dados;
app.use(cors({ origin: "*" })); // Define que sera permitido requisições a partir de qualquer origem;
app.use(helmet()); // Projeto algumas informações de cabeçalho de requisição;

const PORT = process.env.PORT || 3000;

app.use("/user", userRoutes);
app.use("/purchase", purchaseRoutes);

app.listen(PORT, () => {
  console.log("Server is now running!!");
});
