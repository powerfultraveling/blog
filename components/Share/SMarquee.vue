<template>
  <div class="s-marquee" aria-label="跑馬燈">
    <div ref="trackRef" class="s-marquee-track" :style="durationStyle">
      <span v-for="i in 2" :key="i" class="s-marquee-text text-secondary">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  /** 文字內容 */
  text: string
  /** 移動速度（像素/秒），愈大愈快 */
  speed?: number
}

const props = withDefaults(defineProps<Props>(), { speed: 60 })

const trackRef = ref<HTMLElement | null>(null)
const durationSec = ref<number | null>(null)

const durationStyle = computed(() =>
  durationSec.value != null ? { animationDuration: `${durationSec.value}s` } : undefined
)

function measure() {
  const el = trackRef.value
  if (!el) return
  // 一半的 track 寬度 = 單段文字寬度
  const width = el.scrollWidth / 2
  if (width > 0) durationSec.value = width / props.speed
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  measure()
  resizeObserver = new ResizeObserver(measure)
  if (trackRef.value) resizeObserver.observe(trackRef.value)
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})

watch(() => props.text, measure)
</script>

<style scoped>
.s-marquee {
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
}

.s-marquee-track {
  display: inline-flex;
  animation: s-marquee-scroll linear infinite;
}

.s-marquee-text {
  padding-right: 2em;
  flex-shrink: 0;
}

@keyframes s-marquee-scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
