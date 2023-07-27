import { Client, Databases } from "node-appwrite";

export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig();
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64bfc91220e41a43690b")
    .setKey(runtimeConfig.appwriteApiKey);

  const databases = new Databases(client);

  return databases.listDocuments(
    "64bfccb7f279df1a8be9",
    "64bfccc8235305c73809"
  );
});
