// instead of require we use es modules 

import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import { connectDb } from './config/db.js'
import productRoutes from './routes/product.route.js'


const app = express();

// middleware to make sure request is parsed
app.use(express.json());

const PORT = process.env.PORT || 5000;

console.log('MongoDB URL:', process.env.MONGODB_URL);

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is listening at : 'http://localhost:${PORT}'`);
})


// a0IWkHcbdf8Id0W8
// mongodb+srv://kumkum19305:<db_password>@cluster0.fm5a3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0