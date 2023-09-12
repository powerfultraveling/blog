<template>
  <div class="hamburger">
    <div class="stick stick-top" />
    <div
      class="stick stick-bottom"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
        .hamburger {
        @apply w-[108px] h-7 relative;

        &:hover {
            .stick-top {
                @apply top-1/4;
            }

            .stick-bottom {
                @apply bottom-1/4;
            }
        }
        }

        .stick {
        @apply bg-black absolute left-0 right-0 h-[1px] transition-all duration-100;
        }

        .stick-top {
        @apply top-0;
        }

        .stick-bottom {
        @apply bottom-0;
        }

</style>
