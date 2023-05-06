import express from 'express';
import { REDIS_STREAM_CHANNEL, publishClient } from '../redis-config';
require('dotenv').config();

const app = express();

const publish = async (timestamp = new Date().toISOString()) => {
  const article = {
    uuid: Math.random().toString(),
    title: 'Testing redis stream',
    description: 'An article on Redis Stream from Ixora Solution Ltd.',
    timestamp
  };

  try {
    await publishClient.publish(REDIS_STREAM_CHANNEL, JSON.stringify(article));
  } catch (error) {
    console.log('error in publish article');
    console.log(error);
  }
};

app.get('/', async (req, res) => {
  await publish();
  return res.status(200).send('A document is published to the redis stream');
});

app.listen(process.env.PORT);
