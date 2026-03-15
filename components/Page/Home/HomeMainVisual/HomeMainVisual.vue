<template>
  <div class="pt-1">
    <HomeMarquee />
    <div class="flex flex-col lg:flex-row min-h-screen text-slate-800 font-sans container pt-4">
      <HomeMainVisualGallery class="order-2 mb-8 lg:mb-0 lg:order-1" />
      <HomeMainVisualMain class="order-1 lg:order-2" />
      <HomeBulletin class="order-3 lg:order-3" />
    </div>
  </div>
</template>

<script setup>
// 如果需要動態時鐘，可以在這裡使用 onMounted 寫 setInterval
</script>
