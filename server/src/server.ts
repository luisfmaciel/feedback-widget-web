import express from 'express';
// import cors from "cors";
import { cors } from './middlewares/cors';
import { routes } from './routes';

const app = express();
const port = 3333;

app.use(cors);
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || port, () => {
  console.log(`HTTP Server running`);
});