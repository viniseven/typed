import express from "express";
import userRoutes from "./routes/userRoutes.ts";
import authRoutes from "./routes/authRoutes.ts";
import postRoutes from "./routes/postRoutes.ts";

const port = 3000;

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);
app.use(postRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
