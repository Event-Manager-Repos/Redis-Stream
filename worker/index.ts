import { subscribeClient } from './client';

const subscribe = async () => {
  try {
    await subscribeClient.subscribe('article', message => {
      console.log(message);
    });
  } catch (error) {
    console.log('Error in subscribe article');
    console.log(error);
  }
};

(async () => {
  await subscribe();
})();
