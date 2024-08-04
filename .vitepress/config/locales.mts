import {zh_theme_config} from "./zh/theme_config";

export default {
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: zh_theme_config
    },
    // en: {
    //   label: 'Engilsh',
    //   lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
    //   link: '/en/', // default /fr/ -- shows on navbar translations menu, can be external
    //   // other locale specific properties...
    //   title: 'Project-Irminsul'
    // }
  }
}