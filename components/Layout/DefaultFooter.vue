<template>
  <header class="w-full bg-primary">
    <div class="footer-wrapper container">
      <div>
        <a v-for="({ image, link }, i) in links" :key="i" :href="link">
          <img :src="image" />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import instagram from '~/assets/images/instagram.svg'
import github from '~/assets/images/github.svg'
import medium from '~/assets/images/medium.svg'

const links = [
  {
    image: github,
    link: ''
  },
  {
    image: instagram,
    link: ''
  },
  {
    image: medium,
    link: ''
  }
]
</script>

<style scoped>
.footer-wrapper {
  @apply flex justify-between items-end;
}
</style>
