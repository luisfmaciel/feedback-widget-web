import { Router } from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/NodemailerMailAdapter';
import { SubmitFeedback } from './services/SubmitFeedback';

export const routes = Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
    console.log({ type, comment, screenshot });
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository(); 
    const nodemailerMailAdapter = new NodemailerMailAdapter();
  
    const submitFeedback = new SubmitFeedback(
      prismaFeedbacksRepository,
      nodemailerMailAdapter  
    );
    
    console.log('entrou');
    
    await submitFeedback.execute({
      type,
      comment,
      screenshot,
    });
    console.log('saiu');
  
    res.status(201).send();
  } catch (error) {
    console.log(error);
    
    res.status(500).send();
  }
});
