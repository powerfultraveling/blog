<template>
  <div class="content-block">
    <div class="title">
      {{ info.title }}
    </div>
    <div class="content py-4">
      <ul class="space-y-2">
        <li v-for="(item, i) in info.infoItems" :key="i">
          <div class="pt-2">
            <div class="dot">
              <div />
            </div>
          </div>
          <div>{{ item }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  info: {
    title: string
    infoItems: string[]
  }
}

defineProps<Props>()
</script>

<style scoped>
.content-block {
  @apply font-serif xl:grid xl:grid-cols-12 gap-x-4;

  .title {
    @apply text-5xl mb-4 xl:mb-0 xl:col-start-1 xl:col-end-3;
  }

  .content {
    @apply border-l border-black pl-10 ml-2 text-lg xl:col-start-3 xl:col-end-13;

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
