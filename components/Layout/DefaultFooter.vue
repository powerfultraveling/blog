<template>
  <header class="w-full bg-primary">
    <div class="footer-wrapper container py-5 md:pt-15 pb-5">
      <div class="flex items-center space-x-5">
        <a v-for="({ image, link }, i) in links" :key="i" :href="link" target="_blank">
          <img :src="image" class="w-auto h-7" />
        </a>
      </div>
      <div class="text-xs">Copyright Charles Tsai All Rights Reserved.</div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import email from '~/assets/images/email.png'
import github from '~/assets/images/github.svg'
import medium from '~/assets/images/medium.svg'
import linkedin from '~/assets/images/linkedin.svg'

const links = [
  {
    image: github,
    link: 'https://github.com/powerfultraveling'
  },
  {
    image: email,
    link: 'mailto:gastbyylion@gmail.com'
  },
  {
    image: medium,
    link: 'https://medium.com/@gastbyylion'
  },
  {
    image: linkedin,
    link: 'https://www.linkedin.com/in/%E6%81%82%E8%97%9D-%E8%94%A1-8656b3220/'
  }
]
</script>

<style scoped>
.footer-wrapper {
  @apply space-y-3 border-t border-black md:space-y-0 md:flex md:justify-between md:items-end;
}
</style>
