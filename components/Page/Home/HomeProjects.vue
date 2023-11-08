<template>
  <HomeSwiper :slides="slides" :title="$t('專案')" />
</template>

<script lang="ts" setup>
import poya from '~/assets/images/projects/poya.png'
import thw from '~/assets/images/projects/thw.png'
import flyingV from '~/assets/images/projects/flyingV.png'
import kita from '~/assets/images/projects/kita.png'

const { t } = useI18n()

const slides = [
  {
    image: flyingV,
    date: '2022.03.20',
    label: t('flyingV 十週年網站'),
    link: 'https://exhibition.flyingv.cc/',
    content: t(
      '這個專案是短期的活動網站，因此我們能夠展現創意為網站，增加了許多引人注目的視覺效果，使其更加生動活潑。'
    )
  },
  {
    image: kita,
    date: '2022.03.20',
    label: t('台灣友善動物協會'),
    link: 'https://www.kitanimals.org/',
    content: t(
      '這個專案的特點是有大量架構類似的文章需要呈現。為了更有效地處理這些內容，我們採用了 CMS 的架構。這使我們能夠更容易地管理、維護和更新網站的內容。'
    )
  },
  {
    image: poya,
    date: t('2022.03.20'),
    label: t('寶雅官網'),
    link: 'https://www.poya.com.tw/',
    content: t(
      '我負責寶雅官網的前端開發，這是一個規模較大的項目。在這個項目中，最大的挑戰在於一開始的結構設計和工作分配。我們需要確保在專案初期建立共用元件和適當的架構，以確保每位工程師的任務不會互相耦合，確保了專案的高效執行和代碼的可維護性。'
    )
  },
  {
    image: thw,
    date: t('2022.03.20'),
    label: t('高鐵假期'),
    link: 'https://tholiday.thsrc.com.tw/?dialog=8b4e84b973d76a0367d240eac61bcc6f',
    content: t(
      '在這個專案中，我主要負責修改業務邏輯，尤其是商品內頁，因為業務邏輯相當複雜且相互關聯，因此，如何將代碼重構成容易閱讀且易於修改的架構和語法，確保代碼的維護性和擴展性是最重要的關鍵。'
    )
  }
]
</script>
