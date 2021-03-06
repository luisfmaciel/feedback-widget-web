import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/NodemailerMailAdapter';
import { SubmitFeedback } from './services/SubmitFeedback';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository(); 
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedback = new SubmitFeedback(
    prismaFeedbacksRepository,
    nodemailerMailAdapter  
  );

  await submitFeedback.execute({
    type,
    comment,
    screenshot,
  });

  res.status(201).send();
});
