import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Conversation } from "../entity/chat";

const router = Router();

router.get("/conversation/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const conversationRepository = getRepository(Conversation);

    // Use findOneBy for direct ID lookup
    const conversation = await conversationRepository.findOneBy({ id });

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    res.json(conversation);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
});

export default router;
