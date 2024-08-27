import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

createConnection().then(() => {
  app.use('/api', router);

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => console.log(error));
