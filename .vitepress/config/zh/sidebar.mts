import {gsm_c4_sidebar} from "./sidebars";

const zh_sidebar = {
  '/': [{
    text: '原神剧情',
    link: '/genshin/',
    items: [
      {
        text: '原神主线',
        link: '/genshin/mainline/',
        items: [
          {
            text: '第四章',
            link: '/genshin/mainline/chapter-4/'
          }
        ]
      },
      {
        text: '原神活动',
        link: '/genshin/event/'
      }
    ]
  }],
  '/genshin/mainline/chapter-4/': gsm_c4_sidebar
}

export default zh_sidebar