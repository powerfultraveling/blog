<template>
  <label class="flex items-center space-x-3">
    <input :value="value" :checked="checked" type="checkbox" @change="handleChange" />

    <div>
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<script lang="ts" setup>
type CheckboxValue = string | number | boolean

interface Props {
  label?: string
  value: CheckboxValue
  selected: CheckboxValue[] | boolean
}

const props = defineProps<Props>()

const emits = defineEmits(['change'])

const checked = computed(() => {
  if (typeof props.selected === 'boolean') {
    return props.selected
  }

  return props.selected.includes(props.value)
})

function handleChange(e: Event) {
  const checked = (e.target as HTMLInputElement).checked

  if (typeof props.selected === 'boolean') {
    return emits('change', checked)
  }

  if (checked) {
    return emits('change', [...props.selected, props.value])
  }

  const filteredSelected = props.selected.filter((element) => element !== props.value)
  emits('change', filteredSelected)
}
</script>
