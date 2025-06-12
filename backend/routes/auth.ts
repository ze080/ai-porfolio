import express, { Request, Response } from "express";
import prisma from "backend/prisma";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful", user });
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    console.log("Register request body:", req.body);
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: "Missing fields" });

    const existingUser = await prisma.user.findUnique({ where: { username } });

    if (existingUser)
      return res.status(400).json({ error: "Username already taken" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { username, password: hashedPassword },
    });

    res.status(200).json({ message: "User created", user });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
