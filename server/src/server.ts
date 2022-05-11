import express from 'express';
import { routes } from './routes';
// import cors from "cors";

const app = express();
const port = 3333;

app.use(express.json());
// app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Max-Age', '10');
  next();
});
app.use(routes);

app.listen(process.env.PORT || port, () => {
  console.log(`HTTP Server running`);
});
