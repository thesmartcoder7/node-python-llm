import { Router, Request, Response } from "express";
import axios from "axios";

const router = Router();

router.post("/set_model", async (req: Request, res: Response) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/set_model",
      req.body
    );
    res.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors
      res
        .status(error.response?.status || 500)
        .json(error.response?.data || { error: "Something went wrong" });
    } else if (error instanceof Error) {
      // Handle non-Axios errors (e.g., programming errors)
      res.status(500).json({ error: error.message });
    } else {
      // Handle unknown errors
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

export default router;
