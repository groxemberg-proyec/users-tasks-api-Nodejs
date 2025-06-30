import express from 'express';
const app = express();
import Joi from 'joi';
const { not } = Joi;
import notFound from './middlewares/notFound.js';


//import routes
import outhRoutes from './routes/auth.routes.js';
import usersRoutes from './routes/users.routes.js';
import tasksRoutes from './routes/tasks.routers.js';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler.js';
import { authenticateToken } from './middlewares/authenticate.js';

//import middlewares
app.use(morgan('dev'));
app.use(express.json());
 //routes
app.use('/api/login', outhRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/tasks', authenticateToken, tasksRoutes);


app.use(notFound)
app.use(errorHandler)

export default app;