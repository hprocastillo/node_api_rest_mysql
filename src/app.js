import express from 'express';
import customersRoutes from './routes/customers.routes.js';
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json());

app.use('/api', indexRoutes);
app.use('/api', customersRoutes);

app.use((req, res, next) => {
    res.status(404).json({message: 'Tu peticion no se encuentra'});
});

export default app;