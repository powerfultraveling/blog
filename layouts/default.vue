<template>
  <div class="min-h-screen bg-primary flex flex-col">
    <DefaultHeader />
    <div class="mb-auto bg-primary">
      <slot />
    </div>
    <DefaultFooter />
  </div>
</template>
