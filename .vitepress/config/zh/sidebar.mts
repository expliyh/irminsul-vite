import {
  gsm_c4_sidebar,
  gss_c_nahida_sidebar
} from "./sidebars";
import {story_sidebar} from "./sidebars/story";

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
      },
      {
        text: '传说任务',
        link: '/genshin/story/',
        items: story_sidebar
      }
    ]
  }],
  '/genshin/mainline/chapter-4/': gsm_c4_sidebar,
  '/genshin/story/nahida/': gss_c_nahida_sidebar
}

export default zh_sidebar