import express from "express";
import bodyParser from "body-parser";
import { connectDatabase } from "./database";
import modelRoute from "./routes/modelRoute";
import askRoute from "./routes/askRoute";
import conversationRoute from "./routes/chatRoute";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", modelRoute);
app.use("/api", askRoute);
app.use("/api", conversationRoute);

// Start the server
const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
