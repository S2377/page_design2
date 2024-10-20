import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67115b410030b907e032"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
