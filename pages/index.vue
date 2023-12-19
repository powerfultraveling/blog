<template>
  <div>
    <!-- codes for testing, would be removed in the future -->
    <button @click="$snackbar.show({ content: 'hallo' })">click to open</button>
    <button @click="$snackbar.hide()">click to close</button>
    <HomeAbout />
    <HomeProjects />
  </div>
</template>
