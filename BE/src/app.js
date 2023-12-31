import express from 'express';
import productsRoutes from './routes/products';
import categoryRouter from './routes/category';
import authRouter from './routes/auth';
import user from './routes/user';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();

app.use(express.json());
app.use(cors());
// router
app.use('/api', productsRoutes);
app.use('/api', categoryRouter);
app.use('/api', authRouter);
app.use('/api', user);

mongoose.connect('mongodb://127.0.0.1:27017/ShopQuanAo');

export const viteNodeApp = app;
