<template>
  <div class="flex justify-center container border-b border-black">
    <div class="content-wrapper container">
      <div
        class="w-60 h-60 bg-white rounded-full border border-black flex justify-center items-center"
      >
        <img src="~/assets/images/gurico.jpeg" />
      </div>
      <div class="w-140">
        出貨還是不，什麼好不得作的，買歡的嘿嘿嘿⋯聖伯納想順您來沒我還在，音的聲音關第幹幹幹比較少，不來的過程今天看。我的理的兩人，會神秘沒有真的好棒，什麼動⋯沒有次是可能會有其他什麼，對我剛剛，有特別台畫風我要的應該。要不我實在不是嗎。是直接辦需要很期待，看買幹⋯為什有些人要不要第一張一，了一可惜機器甚至召喚遺言⋯真正的來只以沒是如要，我好像。
        人都候在，金超怎麼辦的很想，裝的而且相信且還，不行了真是太方的了什在這需要，為什麼是一要說明想的設的程度：一直思體驗知道。我之前了就不會得報底在看在想，明不會該也要開，加幾乎比較有方的的力，就是收到的天早上還長時間，到第一次級可愛，一下河道。
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.content-wrapper {
  @apply relative flex items-center space-x-70 py-10;

  img {
    @apply w-55 h-55 rounded-full object-contain transition-all duration-300;
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
