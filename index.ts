import express, { Application } from 'express';

import dotenv from 'dotenv';
import connectDB from './config/dbConfig';
import router from './routes/taskRoutes';
dotenv.config();
import cors from "cors";

const app: Application = express();
app.use(cors());
const PORT = process.env.PORT || 8090;
app.use(express.json());
app.use("/api/tasks",router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB()
});
