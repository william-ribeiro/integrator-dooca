import { DoocaClient } from 'dc-node-client-sdk';

export const client = DoocaClient.create({
  baseUrl: process.env.BASE_URL,

  token: process.env.TOKEN,
});
