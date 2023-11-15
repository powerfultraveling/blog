<template>
  <div class="container">
    <ChallengeListPageItem v-for="{ title, to } in challenges" :key="to" :title="title" :to="to" />
  </div>
</template>

<script lang="ts" setup>
const challenges = [
  {
    title: 'Buttons',
    to: '/challenges/buttons'
  }
]
</script>
