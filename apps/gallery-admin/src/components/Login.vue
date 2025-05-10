<script setup lang="ts">
import { supabaseClient } from '@packages/utils'
import { ref } from 'vue'

const formData = ref({
  email: '',
  password: '',
})

async function handleLogin() {
  const response = await supabaseClient.auth.signInWithPassword({
    email: formData.value.email,
    password: formData.value.password,
  })
  console.log(response)
}

async function handSingOut() {
  const response = await supabaseClient.auth.signOut()
  console.log(response)
}
</script>

<template>
  <div>
    <button @click="handSingOut">
      logout
    </button>
    <form @submit.prevent="handleLogin">
      <h1>Login</h1>
      <input v-model="formData.email" type="email" placeholder="Email">
      <input v-model="formData.password" type="password" placeholder="Password">
      <button type="submit">
        Login
      </button>
    </form>
  </div>
</template>
