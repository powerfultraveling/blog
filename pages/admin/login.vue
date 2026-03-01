<template>
  <div class="pt-10">
    <div class="container max-w-sm">
      <h1 class="h1 mb-6">Admin 登入</h1>
      <form class="space-y-4" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="text-body block mb-1">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 bg-white border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label for="password" class="text-body block mb-1">密碼</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-2 bg-white border rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
            placeholder="••••••••"
          />
        </div>
        <p v-if="error" class="text-caption text-red-600">{{ error }}</p>
        <button type="submit" class="btn btn-primary w-full" :disabled="loading">
          {{ loading ? '登入中...' : '登入' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/composables/useAuthStore'

const { login, authLoading: loading, authError: error } = useAuthStore()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  const { error: err } = await login(email.value, password.value)
  if (!err) await navigateTo('/admin/editor')
}
</script>
