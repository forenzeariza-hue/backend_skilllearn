const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const routes = require('./routes');
const ensureDb = require('./middleware/ensureDb');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.disable('x-powered-by');
app.use(
  cors({
    origin: env.corsOrigin === '*' ? true : env.corsOrigin.split(',').map((item) => item.trim()),
    credentials: true,
  })
);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api', ensureDb, routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
