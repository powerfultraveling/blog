<template>
  <div class="list-link">
    <a v-if="isExternal" :href="to">
      <ListLinkItem :title="title" />
    </a>
    <PLink v-else :to="to">
      <ListLinkItem :title="title" />
    </PLink>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  to: string
  isExternal: boolean
}

defineProps<Props>()
</script>
