<template>
  <div class="container flex justify-center mb-20 lg:mb-30">
    <div class="relative">
      <div class="moving-block" />
      <div class="title">{{ $t('自我介紹') }}</div>
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply px-6 py-4 bg-primary border border-black text-6xl relative z-20 md:text-[50px];
}

.moving-block {
  @apply bg-black absolute w-full h-full top-0 z-10;

  animation: moving 1s infinite alternate;
}

@keyframes moving {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-10px, 20px);
  }
}
</style>
