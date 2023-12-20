<template>
  <Icon :name="iconName" class="s-icon" />
</template>

<script lang="ts" setup>
// icon's name could be found here:  https://icones.js.org/
interface Props {
  pack?: string
  name: string
}

const DEFAULT_PACK_NAME = 'ion'

const props = withDefaults(defineProps<Props>(), {
  pack: DEFAULT_PACK_NAME
})

// TODO: How to use TS to notify developer that the name does not exist?
const iconName = computed(() => `${props.pack}:${props.name}`)
</script>
