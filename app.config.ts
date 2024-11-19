// import { defineAppConfig } from 'nuxt/app'
// (不能使用环境变量配置覆盖)用于公开在构建时确定的公共变量。与runtimeConfig选项不同，这些变量不能使用环境变量进行覆盖
export default defineAppConfig({
    title: 'Hello Nuxt',
    theme: {
        dark: true,
        colors: {
            primary: '#ff0000',
        },
    },
})
