<template>
  <PLink v-if="to" :to="to" class="s-back-btn">
    <span class="s-back-btn-caret" aria-hidden="true">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </span>
    <slot />
  </PLink>
  <button v-else type="button" class="s-back-btn" @click="goBack">
    <span class="s-back-btn-caret" aria-hidden="true">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  to?: string
}

defineProps<Props>()

const router = useRouter()

function goBack() {
  router.back()
}
</script>

<style scoped>
.s-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
}

.s-back-btn-caret {
  display: inline-flex;
}
</style>
