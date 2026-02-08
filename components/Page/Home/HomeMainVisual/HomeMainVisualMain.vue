<template>
  <main class="flex-1 p-4 md:p-6 overflow-y-auto">
    <div
      class="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg border mb-10 border-slate-200"
    >
      <img :src="osakaImage" alt="Osaka" class="w-full aspect-[4/3] object-cover" />

      <div class="absolute bottom-6 left-6 right-6">
        <span class="bg-[#0070BC] text-white text-xs px-3 py-1 font-bold inline-block mb-2"
          >カルチャー</span
        >
        <h2 class="bg-[#0070BC] text-white text-xl md:text-2xl p-4 font-bold leading-tight">
          我是蔡恂藝，歡迎光臨。
        </h2>
      </div>
    </div>
    <HomeInfoCard />
  </main>
</template>

<script setup>
import osakaImage from '~/assets/images/home/osaka.jpeg'
</script>
