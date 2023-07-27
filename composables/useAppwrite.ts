import { Client } from "appwrite";

export default () => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64bfc91220e41a43690b");

  return client;
};