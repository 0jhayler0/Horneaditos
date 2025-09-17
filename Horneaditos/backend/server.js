import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

//mongo connection
mongoose.connect("mongodb+srv://admin:1q2w3e4r@horneaditoscluster.viwmlq6.mongodb.net/horneaditosCluster?retryWrites=true&w=majority")
    .then(() => console.log("Conexión exitosa a la base de datos"))
    .catch(err => console.log("Error en la conexión a la base de datos", err));