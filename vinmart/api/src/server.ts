// Libraries
import dotenv from 'dotenv';
import express, { Express } from 'express';
import passport from 'passport';

// Commons
import { middlewarePassportStrategy } from 'src/middlewares';

// Routes
import { authenticationRouter, catalogueRouter, usersRouter } from 'src/routes';

dotenv.config();

// Apply strategy to passport
passport.initialize();
middlewarePassportStrategy(passport);

const app: Express = express();
const port = process.env.PORT;

// Define static public assets
app.use(express.static('public'));

// Imports all of the routes
app.use('/api/v1/authentication', authenticationRouter);
app.use('/api/v1/catalogue', catalogueRouter);
app.use('/api/v1/users', usersRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on PORT: ${port}`);
});

export { app };
