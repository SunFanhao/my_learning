# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

# 项目运行
npm run devv

# 项目环境基本搭建
    1. npm create vite    pnpm create vite    yarn create vite  // 创建 vue3+ts+vite的一个项目命令
            npm i         pnpm install                          // 安装Npm 依赖
            npm run dev   pnpm run dev                          // 项目运行

    2. npm i pinia -S                                           // 使用pinia
        创建 src/store 文件                                      // 使用pinia插件 （基于vuex的状态管理工具
        创建 src/store/index.ts 文件                             // 引入pinia

    3. npm i vue-router -S                                      // 安装vue-router路由
        创建 src/router 文件
        Apo.vue  配置 <RouterView></RouterView>

    4. npm i @vueuse/core -S                                    // 安装 api 插件
        npm i axios -S                                          // 安装 axios 
            创建 src/utils/require.ts

    5. rem 适配
            创建 src/utils/rem.ts

    6. npm i vant -S                                            // 安装 vant库

# 创建 api 文件夹
    user.ts                                                     // 用户 api                    

# 跨域代理
    vite.confg.ts
    server 下的 proxy

# 封装公共组件 components
    FooterTab.vue                                               // 底部导航

# views
    index.vue                                                   // 首页