import { Router } from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/NodemailerMailAdapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { SubmitFeedback } from './services/SubmitFeedback';

export const routes = Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
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
  } catch (error) {
    console.log(error);
    
    res.status(500).send();
  }
});
