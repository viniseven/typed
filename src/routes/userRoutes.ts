import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/resgister", (req, res) => {
  res.send("User registered");
});

userRoutes.get("/login", (req, res) => {
  res.send("Realizar login");
});
