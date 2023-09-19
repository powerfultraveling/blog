<template>
  <div class="flex justify-center container border-b border-black">
    <div class="content-wrapper container">
      <div
        class="w-60 h-60 bg-white rounded-full border border-black flex justify-center items-center"
      >
        <img src="~/assets/images/gurico.jpeg" />
      </div>
      <div class="w-140">
        この度、砧書体制作所（代表：片岡朗）は、2022 年1
        月より株式会社光伸プランニング（代表取締役社長：原壯）が運営することとなりました。
        株式会社光伸プランニングは片岡の義理の息子が代表を務める会社です。
        運営は株式会社光伸プランニングとなりますが、ベンダー名『砧書体制作所』は継続いたします。
        片岡朗は相談役として引き続き砧書体制作所のフォント制作に専念します。
        各種サービスもこれまでと変わらない形で提供いたしますので、今後とも変わらぬご愛顧を賜りますようお願い申し上げます。
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
