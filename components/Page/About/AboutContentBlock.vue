<template>
  <div class="content-block">
    <div class="title">
      {{ info.title }}
    </div>
    <div class="content py-4">
      <ul class="space-y-2">
        <li v-for="(item, i) in info.items" :key="i">
          <div class="pt-2">
            <div class="dot">
              <div />
            </div>
          </div>
          <div class="font-sans max-w-[700px]">{{ item }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  info: {
    title: string
    items: string[]
  }
}

defineProps<Props>()
</script>

<style scoped>
.content-block {
  @apply font-serif;

  .title {
    @apply text-4xl mb-4;
  }

  .content {
    @apply border-l border-black pl-10 text-lg;

    li {
      @apply flex items-start space-x-2;
    }
  }

  .dot {
    @apply rounded-full border border-black w-3 h-3 flex items-center justify-center shrink-0;

    > div {
      @apply rounded-full bg-black w-2 h-2;
    }
  }
}
</style>
