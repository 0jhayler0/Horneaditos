import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js";
import bcrypt from "bcrypt";

const app = express();
app.use(cors());
app.use(express.json());

//mongo connection
mongoose.connect("mongodb+srv://admin:1q2w3e4r@horneaditoscluster.viwmlq6.mongodb.net/horneaditosCluster?retryWrites=true&w=majority")
    .then(() => console.log("Conexión exitosa a la base de datos"))
    .catch(err => console.log("Error en la conexión a la base de datos", err));

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Usuario no encontrado" });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }
        res.json({ message: "Login exitoso" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
});

app.listen(5000, () => {
    console.log("Servidor corriendo en el puerto 5000");
});