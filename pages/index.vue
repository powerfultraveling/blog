<template>
  <div>
    <HomeAbout />
    <HomeProjects />
    <form class="container">
      {{ values }}
      <SInput name="test" rules="email" required />
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'

const { values } = useForm({
  initialValues: {
    test: 'hsksi'
  }
})
</script>
