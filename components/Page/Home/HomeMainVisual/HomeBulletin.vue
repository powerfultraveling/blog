<template>
  <div
    class="w-full rounded-l-2xl lg:w-80 bg-[#e88800] text-white p-6 flex flex-col rounded- shadow-2xl px-4 lg:px-0"
  >
    <div class="flex justify-center mb-10 pl-4">
      <div class="w-full py-3 flex items-center justify-center rounded-sm bg-[#92e06f]">
        <span class="text-[#B21E06] font-black text-4xl">インフォメーション</span>
      </div>
    </div>

    <div class="text-center space-y-2 mb-12">
      <p class="text-xl font-medium tracking-widest">{{ dateString }}</p>
      <p class="text-lg">{{ dayOfWeek }}</p>
      <p class="text-5xl font-bold font-mono tracking-tighter">{{ timeString }}</p>
    </div>

    <hr class="border-white/30 mb-8" />

    <div class="space-y-6 px-4">
      <p class="text-sm font-bold tracking-widest text-center mb-4">今年の予定はこちら！</p>
      <ul class="text-sm space-y-4 leading-relaxed">
        <li v-for="item in items" :key="item" class="flex gap-2">
          <span>☞</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const items = [
  '能夠完整彈奏兩首爵士 classic。',
  '年底考過 Ｎ１。',
  '學習打網球。',
  '理解並購買 ETF。'
]

// 響應式變數
const dateString = ref('')
const dayOfWeek = ref('')
const timeString = ref('')
let timer = null

const updateTime = () => {
  const now = new Date()

  // 格式化日期：2026年2月7日
  dateString.value = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`

  // 格式化星期
  const days = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
  dayOfWeek.value = days[now.getDay()]

  // 格式化時間：19:19:24 (補零處理)
  const pad = (n) => n.toString().padStart(2, '0')
  timeString.value = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
}

onMounted(() => {
  updateTime() // 初始化先執行一次
  timer = setInterval(updateTime, 1000) // 每秒更新
})

onUnmounted(() => {
  if (timer) clearInterval(timer) // 組件銷毀時清除計時器
})
</script>
