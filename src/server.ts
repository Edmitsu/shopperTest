// index.ts
import express from 'express';
import dotenv from 'dotenv';
import uploadRoute from './routes/upload';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/upload', uploadRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});