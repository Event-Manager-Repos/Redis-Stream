import express from 'express';
require('dotenv').config();

const start = async () => {
  const app = express();

  app.get('/', (req, res) => res.send(`Welcome from web worker ${new Date()}`));

  app.listen(process.env.WORKER_PORT || 8080, () => {
    console.log(`Listening worker on port ${process.env.WORKER_PORT || 8080}`);
  });
};

start();
