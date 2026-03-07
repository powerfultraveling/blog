<template>
  <div>
    <AppLoading :visible="!appReady || isPageLoading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const appReady = ref(false)
const isPageLoading = ref(false)

// TODO: this may not be needed
const router = useRouter()
router.beforeEach((_to, _from, next) => {
  isPageLoading.value = true
  next()
})
router.afterEach(() => {
  isPageLoading.value = false
})

onMounted(async () => {
  const start = Date.now()
  await router.isReady()
  const elapsed = Date.now() - start
  const minVisibleMs = 500
  const delay = Math.max(0, minVisibleMs - elapsed)
  setTimeout(() => {
    appReady.value = true
  }, delay)
})
</script>
