<script setup lang="ts">
import Login from './components/Login.vue'
import { useGalleryUpload } from './composables/useGalleryUpload'

const { imageRef, formData, handleImageLoad, handleFormSubmit } = useGalleryUpload()

async function handleSubmit() {
  const result = await handleFormSubmit()
  console.log(result)
}
</script>

<template>
  <div>
    <Login />
    {{ formData }}
    <img
      ref="imageRef"
      :src="formData.url"
      alt=""
      @load="handleImageLoad"
    >
    <form @submit.prevent="handleSubmit">
      <p>URL：</p>
      <input v-model="formData.url" type="url">
      <p>hash：</p>
      <input v-model="formData.hash" disabled type="text">
      <p>width：{{ formData.width }}</p>
      <input v-model="formData.width" disabled type="text">
      <p>height：{{ formData.height }}</p>
      <input v-model="formData.height" disabled type="text">

      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
form {
  max-width: 20%;
  display: flex;
  flex-direction: column;
}
img {
  height: 100px;
}
</style>
