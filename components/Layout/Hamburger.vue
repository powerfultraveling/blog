<template>
  <div class="hamburger" :class="{ opened: active }" @click="emits('change')">
    <div class="stick stick-top" />
    <div class="stick stick-bottom" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  active: boolean
}

defineProps<Props>()

const emits = defineEmits(['change'])
</script>

<style scoped>
.hamburger {
  @apply w-27 h-7 relative cursor-pointer;

  .stick {
    @apply bg-black absolute left-0 right-0 h-[1px] transition-all duration-200;
  }

  .stick-top {
    @apply top-1;
  }

  .stick-bottom {
    @apply bottom-1;
  }

  &:hover {
    .stick-top {
      @apply top-1/4;
    }

    .stick-bottom {
      @apply bottom-1/4;
    }
  }

  &.opened {
    .stick-top {
      @apply top-1/2 rotate-12;
    }

    .stick-bottom {
      @apply bottom-1/2 -rotate-12;
    }
  }
}
</style>
