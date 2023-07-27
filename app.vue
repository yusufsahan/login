<template>
  <div>
    <h1>Hello World From Nuxt!</h1>
    <ul v-if="data">
      <li v-for="cat in data.documents">
        {{ cat.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Databases } from "appwrite";

const appwrite = useAppwrite();
const database = new Databases(appwrite);

const { data } = await useAsyncData(() =>
  database.listDocuments("64bfccb7f279df1a8be9", "64bfccc8235305c73809")
);

onMounted(() => {
  console.log(data.value)
})
</script>
