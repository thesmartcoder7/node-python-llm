import express, { Request, Response } from "express";
import axios from "axios";

const router = express.Router();

router.post("/ask", async (req: Request, res: Response) => {
  try {
    const response = await axios.post("http://localhost:5000/ask", req.body);
    const { answer, context } = response.data;

    // Save to database or other processing

    res.json(response.data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Handle Error object
      res.status(500).json({ error: error.message });
    } else {
      // Handle non-Error cases
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

export default router;
