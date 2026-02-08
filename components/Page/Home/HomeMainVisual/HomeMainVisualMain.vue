<template>
  <main class="flex-1 p-4 md:p-6 overflow-y-auto">
    <div
      class="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg border mb-10 border-slate-200"
    >
      <img :src="osakaImage" alt="Osaka" class="w-full aspect-[4/3] object-cover" />

      <div class="absolute bottom-6 left-6 right-6 group">
        <span
          class="text-secondary group-hover:text-white group-hover:bg-secondary bg-primary text-xs px-3 py-1 font-bold inline-block border-t border-x border-secondary rounded-t group-hover:border-primary transitable"
        >
          カルチャー
        </span>
        <h2
          class="text-secondary transitable group-hover:text-white group-hover:bg-secondary bg-primary text-xl md:text-2xl p-4 font-bold leading-tight border-y border-x border-secondary rounded-b group-hover:border-primary"
        >
          很隨意經營的部落格
        </h2>
      </div>
    </div>
    <HomeInfoCard />
  </main>
</template>

<script setup>
import osakaImage from '~/assets/images/home/osaka.jpeg'
</script>
