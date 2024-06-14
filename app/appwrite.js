import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('666c85a9001cf139db9c'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
