import type { ProjectItem } from '~/libs/types'
import toyotaGripImage from '~/assets/images/projects/toyota-grip.png'
import kimetsuImage from '~/assets/images/projects/kimetsu.png'
import tcKioskImage from '~/assets/images/projects/ts-kiosk.png'

export const interactive: ProjectItem[] = [
  {
    image: toyotaGripImage,
    title: 'TOYOTA GRIP 活動遊戲',
    description:
      'TOYOTA USA 在美國辦的活動，由我們製作遊戲。在 AI 產圖剛出來時，用 ComfyUI開發產圖系統。使用者最後會拿到一個客製化的個人圖片。',
    tags: ['React', 'Game'],
    articleLink: 'https://www.boring-lab.com/work/toyota-grip-season-2'
  },
  {
    image: kimetsuImage,
    title: '鬼滅之刃活動遊戲',
    description:
      '鬼滅之刃活動遊戲，因為是活動遊戲，整體加上了許多比較酷炫的動畫效果，是一個比較活潑的遊戲',
    tags: ['React', 'Game'],
    articleLink: 'https://kimetsu-exhibition.boring-lab.com/'
  },
  {
    image: tcKioskImage,
    title: '台新高齡產業活動遊戲',
    description:
      '台新高齡產業活動遊戲，因為是活動遊戲，整體加上了許多比較酷炫的動畫效果，是一個比較活潑的遊戲',
    tags: ['React', 'Game'],
    articleLink: 'https://www.boring-lab.com/work/tc-kiosk'
  }
]
