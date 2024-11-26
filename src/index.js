import express from "express";
import apiRoutes from "./routes/route.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", apiRoutes);

app.listen(PORT, () => console.log("Hola Mundo. Estas en el puerto " + PORT));
