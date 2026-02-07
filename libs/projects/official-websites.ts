import type { ProjectItem } from '~/libs/types'
import poyaImage from '~/assets/images/projects/poya.jpg'
import nccuImage from '~/assets/images/projects/nccu.png'
import flyingVImage from '~/assets/images/projects/flyingv.jpg'

export const officialWebsites: ProjectItem[] = [
  {
    image: nccuImage,
    title: '政治大學 X 學院官網',
    description:
      '政治大學 X 學院官網，因為是學院官網，整體加上了許多比較酷炫的動畫效果，是一個比較活潑的網站',
    tags: ['Nuxt 3', 'Tailwind', 'UI Kit'],
    projectLink: 'https://x.nccu.edu.tw/',
    articleLink: 'https://www.boring-lab.com/work/zheng-da-wang-zhan'
  },
  {
    image: poyaImage,
    title: '寶雅官網',
    description:
      '幫助重新開發寶雅官網，因為此專案規模比較大，主要困難點在最一開始的結構設計與工作的分配，如何在初期建立好共用元件與工具，讓每個工程師的任務不互相耦合是最重要的。',
    tags: ['Nuxt 3', 'Tailwind', 'UI Kit'],
    projectLink: 'https://www.poya.com.tw/'
  },

  {
    image: flyingVImage,
    title: 'flyingV 十週年網站',
    description:
      '慶祝 flying v 的活動網站，因為是活動網站，整體加上了許多比較酷炫的動畫效果，是一個比較活潑的網站。',
    tags: ['Nuxt 3', 'Tailwind', 'UI Kit'],
    projectLink: 'https://exhibition.flyingv.cc/'
  }
]
