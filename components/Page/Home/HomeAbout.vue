<template>
  <div class="w-full flex justify-center container border-b border-black">
    <div class="content-wrapper">
      <div class="profile-picture">
        <img src="~/assets/images/profile.jpeg" />
        <div class="profile-cover">{{ $t('黏貼處') }}</div>
      </div>
      <div class="font-serif pl-4 border-l border-black">
        <div class="text-5xl mb-5">
          {{ $t('蔡恂藝') }}
        </div>
        <div class="w-full leading-8 md:w-100">
          {{
            $t(
              '前端工程師，大學讀法律和外文，誤打誤撞之下開始寫程式，目前有兩年前端開發經驗，擅長使用 Vue 及相關技術開發，注重程式碼品質、熱愛分享。寫程式之外，我喜歡爬山、打籃球、彈鋼琴、書店和音樂。'
            )
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.content-wrapper {
  @apply relative flex flex-col items-center space-y-5 md:flex-row md:space-x-30 py-10;

  .profile-picture {
    @apply relative w-50 h-50 border border-black flex justify-center items-center shrink-0 overflow-x-hidden;

    .profile-cover {
      @apply absolute w-full h-full flex items-center justify-center bg-primary transition-all duration-1000 cursor-pointer font-serif;
    }

    &:hover .profile-cover {
      @apply translate-x-160;
    }
  }

  img {
    @apply w-40 h-40 object-contain transition-all duration-300;
  }
}

img:hover {
  animation: bounce 0.5s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0% {
    transform: translate(1px, 1px) rotate(0);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0) rotate(1deg);
  }

  30% {
    transform: translate(3px, 2px) rotate(0);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0);
  }

  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: translate(1px, 2px) rotate(0);
  }

  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
