import express from 'express';
import { config } from 'dotenv'
import { connectdb } from './config/Database.js';

config({
    path: "./config/config.env"
})

const app = express();

connectdb();

import courseRoutes from './routes/courseRoutes.js' 
import userRoutes from './routes/userRoutes.js' 

// Routes
app.use('/api/v1', courseRoutes)
app.use('/api/v1', userRoutes)

app.listen(process.env.PORT, () => {
    console.log('http://localhost:'+process.env.PORT)
})