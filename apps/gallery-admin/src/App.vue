<script setup lang="ts">
import { useGalleryUpload } from './composables/useGalleryUpload'
const { imageRef, formData, handleImageLoad, handleFormSubmit } = useGalleryUpload()

const handleSubmit = async () => {
  const result = await handleFormSubmit()
  console.log(result)
}

</script>

<template>
  <div>
    {{ formData }}
    <img 
      :src="formData.url" 
      ref="imageRef" 
      alt="" 
      @load="handleImageLoad"
    />
    <form @submit.prevent="handleSubmit">
      <p>URL：</p>
      <input v-model="formData.url" type="url" />
      <p>hash：</p>
      <input disabled v-model="formData.hash" type="text" />
      <p>width：{{ formData.width }}</p>
      <input disabled v-model="formData.width" type="text" />
      <p>height：{{ formData.height }}</p>
      <input disabled v-model="formData.height" type="text" />

      <button type="submit">Submit</button>
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
