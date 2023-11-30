<template>
  <div class="field-label">
    <div v-if="required" class="required-icon">*</div>
    <div>{{ label }}</div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  label: string
  required: boolean
}

defineProps<Props>()
</script>

<style scoped>
.field-label {
  @apply flex items-center space-x-px mb-px font-medium;
}

.required-icon {
  @apply text-danger;
}
</style>
