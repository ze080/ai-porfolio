import express from 'express';
import type { Request, Response } from 'express-serve-static-core';
import cors from 'cors';
import prisma from '../backend/prisma';
import authRoutes from './routes/auth';

const app = express();
const PORT = 5173;

app.use(cors());
app.use(express.json());

// Use auth routes with /api/auth prefix
app.use('/api/auth', authRoutes);

// Get messages for a user
app.get('/api/messages/:userId', async (req: Request, res: Response) => {
  const messages = await prisma.message.findMany({
    where: { userId: req.params.userId },
    orderBy: { timestamp: 'asc' },
  });

  res.json({ messages });
});

// Save a message
app.post('/api/messages', async (req: Request, res: Response) => {
  const { userId, sender, text } = req.body;

  const message = await prisma.message.create({
    data: { userId, sender, text },
  });

  res.status(200).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
