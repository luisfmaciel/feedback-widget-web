import { SubmitFeedback } from "./SubmitFeedback";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedback(
  { create: async () => {} },
  { sendMail: async () => {} }
)

describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () => {
    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,HujOPKDkdk45ewfFSF2',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled;
    expect(sendMailSpy).toHaveBeenCalled;
  });
  
  it('should not be able to submit a feedback without type', async () => {
    
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,HujOPKDkdk45ewfFSF2',
    })).rejects.toThrow();
  });
  
  it('should not be able to submit a feedback without comment', async () => {
    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,HujOPKDkdk45ewfFSF2',
    })).rejects.toThrow();
  });
  
  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Está tdo bugado',
      screenshot: 'test.jpg',
    })).rejects.toThrow();
  });
});