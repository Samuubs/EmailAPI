import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

app.get("/user", (req, res) => {
    return res.json({message: "deu certo"})
})

app.listen(3333, () => console.log("Server is running on port 3333."));