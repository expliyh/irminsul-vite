// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import ICP from './ICP.vue'

export default {
    extends: DefaultTheme,
    // 使用注入插槽的包装组件覆盖 Layout
    Layout: ICP
}