<template>
  <div>
    <AppLoading :visible="!appReady" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const appReady = ref(false)

onMounted(async () => {
  const start = Date.now()
  const router = useRouter()
  await router.isReady()
  const elapsed = Date.now() - start
  const minVisibleMs = 500
  const delay = Math.max(0, minVisibleMs - elapsed)
  setTimeout(() => {
    appReady.value = true
  }, delay)
})
</script>
