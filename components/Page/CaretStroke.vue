<template>
  <div class="caret-wrapper">
    <div class="flex justify-end">
      <div class="caret"></div>
    </div>
    <div class="caret-stroke"></div>
  </div>
</template>

<style scoped>
.caret-wrapper {
  @apply w-fit;

  &:hover {
    .caret,
    .caret-stroke {
      @apply bg-gray;
    }
  }

  .caret {
    @apply h-3 bg-black w-px -rotate-45 origin-bottom transitable md:h-6;
  }

  .caret-stroke {
    @apply w-10 bg-black h-px relative md:w-30 transitable lg:w-40 xl:w-50;
  }
}
</style>
