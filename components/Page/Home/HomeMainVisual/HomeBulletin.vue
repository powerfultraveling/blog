<template>
  <aside
    class="w-64 md:w-80 bg-[#B21E06] text-white p-6 flex flex-col sticky top-0 h-screen rounded-l-[40px] shadow-2xl"
  >
    <div class="flex justify-center mb-10 pl-4">
      <div class="w-full py-3 flex items-center justify-center rounded-sm bg-[#92e06f]">
        <span class="text-[#B21E06] font-black text-4xl">インフォメーション</span>
      </div>
    </div>

    <div class="text-center space-y-2 mb-12">
      <p class="text-xl font-medium tracking-widest">2026年2月7日</p>
      <p class="text-lg">土曜日</p>
      <p class="text-4xl font-bold font-mono tracking-tighter">19:19:24</p>
    </div>

    <hr class="border-white/30 mb-8" />

    <div class="space-y-6">
      <p class="text-sm font-bold tracking-widest text-center mb-4">今年の予定はこちら！</p>

      <ul class="text-xs space-y-4 leading-relaxed">
        <li class="flex gap-2">
          <span>☞</span>
          <span>21:00～ テレビ東京『出没！アド街ック天国』を見る。</span>
        </li>
        <li class="flex gap-2">
          <span>☞</span>
          <span>〈Rivotorto Pieces〉の個展「手渡しのおはなし」に行く。</span>
        </li>
        <li class="flex gap-2 border-b border-white/20 pb-2">
          <span>☞</span>
          <span>「PARCO PRINT CENTER -ART POSTER TRADE 2026」に行く。</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
// 如果需要動態時鐘，可以在這裡使用 onMounted 寫 setInterval
</script>
