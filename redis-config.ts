import { createClient } from 'redis';

const publishClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_DOCKER_PORT as unknown as number
  },
  password: process.env.REDIS_PASSWORD
});

publishClient.on('error', err => console.error(err));
publishClient.connect();

const subscribeClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_DOCKER_PORT as unknown as number
  },
  password: process.env.REDIS_PASSWORD
});

subscribeClient.on('error', err => console.error(err));
subscribeClient.connect();

export const REDIS_STREAM_CHANNEL = 'my-stream-channel';
export { publishClient, subscribeClient };
