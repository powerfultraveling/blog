<template>
  <div class="bg-white rounded-t-md py-4 border border-black">
    <div class="pb-4 border-b border-black px-4">
      <SCheckbox
        :value="isAllSelected"
        :selected="isAllSelected"
        label="全選"
        @change="handleAllSelect"
      />
    </div>
    <ul class="grid grid-cols-3 gap-x-4">
      <li v-for="{ label, value } in items" :key="value" class="px-4 py-4">
        <SCheckbox :label="label" :value="value" :selected="selected" @change="handleSelected" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const isAllSelected = ref(false)
const selected = ref<string[]>([])

const items = [
  {
    label: 'lemon',
    value: 'lemon'
  },
  {
    label: 'apple',
    value: 'apple'
  },
  {
    label: 'orange',
    value: 'orange'
  }
]

function handleSelected(newSelected: []) {
  selected.value = newSelected
}

function handleAllSelect(isAllSelect: boolean) {
  if (!isAllSelect) {
    selected.value = []
    return
  }

  selected.value = items.map(({ value }) => value)
}
</script>
