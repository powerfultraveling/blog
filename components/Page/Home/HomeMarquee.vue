<template>
  <div class="container pt-2">
    <SMarquee :text="text" />
  </div>
</template>

<script lang="ts" setup>
const texts = [
  '網站工程師這個職業在未來會變成什麼樣的角色呢？',
  '如果手上的技能在未來將不在有用，是不是要趁自己手上的技能還有些用處時，多做點東西哩？',
  '要怎麼有效率的讓左手熟悉 comping 呢？'
]

const text = computed(() => {
  let finalText = ''

  texts.forEach((text) => {
    finalText += text + ' '
  })

  return finalText
})
</script>
