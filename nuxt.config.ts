// https://nuxt.com/docs/api/configuration/nuxt-config
// 可以覆盖或扩展应用程序的行为;defineNuxtConfig助手函数在全局范围内无需导入即可使用。
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    ssr: true,
    // 环境覆盖
    $development: {
        ssr: false,
    },
    $production: {},

    // 控制环境变量和私有令牌。运行时配置，可以在页面通过useRuntimeConfig()使用
    runtimeConfig: {
        // 只在服务器端可用的私有键
        apiSecret: '123',
        // public中的键也可以在客户端使用
        public: {
            apiBase: '/api',
        },
    },

    // vite配置支持
    vite: {
        // css配置
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "/assets/styles/_colors.scss" as *;',
                },
            },
        },
        //  别名
        resolve: {
            alias: {
                '@assets': '~/assets',
                '@': '/',
            },
        },
        vue: {
            features: {
                customElement: true,
            },
        },
        vueJsx: {
            // options
            mergeProps: true,
        },
        // 插件配置
        plugins: [],
        esbuild: {
            drop: ['console', 'debugger'], //打包去除(开发环境的js文件的log也会去除)
            // exclude: ['.env*'],
        },
    },
    // vue配置，如开启实验性功能等
    vue: {},

    app: {
        // 可以启用页面过渡来为所有的页面应用自动过渡效果。
        pageTransition: { name: 'page', mode: 'out-in' },
        // 布局layout过渡
        layoutTransition: { name: 'layout', mode: 'out-in' },
        // 可以自定义整个应用的头部。
        // 该方法不允许你提供响应式数据。
        // head: {
        //     //  可以简单配置seo
        //     title: 'cherish app',
        //     bodyAttrs: { style: 'height: 100%; margin:0; padding: 0;' },
        //     meta: [{ name: 'description', content: 'cherish的神奇网站。' }],
        // },
        head: {
            titleTemplate: '%s | MBTI 性格测试与MBTI分类介绍',
            bodyAttrs: { style: 'height: 100%; margin:0; padding: 0;' },
            meta: [
                { name: 'description', content: 'MBTI 性格测试与分析，帮助你了解自己，探索 AI 应用如何辅助个性分析与工作表现提升。MBTI分类介绍' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'robots', content: 'index, follow' }, // 确保搜索引擎可以抓取页面
                { name: 'keywords', content: 'MBTI, 人格测试, 性格分析, AI 应用, 人工智能, MBTI分类介绍, MBTI分类' }, // 相关关键词
                { name: 'author', content: 'cherish' }, // 作者名
                { name: 'og:title', content: 'MBTI 性格测试与 MBTI分类' }, // Open Graph 标题
                { name: 'og:description', content: '了解你的 MBTI 性格类型并探索 AI 如何帮助你提升工作效率与个人成长。' }, // Open Graph 描述
                // { name: 'og:image', content: 'https://example.com/path/to/image.jpg' }, // Open Graph 图片
                // { name: 'og:url', content: 'https://example.com/mbti-ai' }, // Open Graph URL
                { name: 'og:type', content: 'website' }, // Open Graph 类型
                { name: 'twitter:card', content: 'summary_large_image' }, // Twitter 卡片类型
                { name: 'twitter:title', content: 'MBTI 性格测试与 AI 应用' }, // Twitter 标题
                { name: 'twitter:description', content: '探索 MBTI 性格测试和 AI 的结合，提升个性分析与工作效率。' }, // Twitter 描述
                { name: 'twitter:image', content: 'https://example.com/path/to/image.jpg' }, // Twitter 图片
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' },
            ],
        },
    },
    // 全局css配置
    css: [
        '@assets/css/main.css',
        'animate.css',
        // 示例主题，可以根据需要换成其它主题
    ],

    // 服务器存储配置
    nitro: {
        storage: {
            // redis: {
            // driver: 'redis',
            // /* redis连接器选项 */
            // port: 6379, // Redis端口
            // host: 'localhost', // Redis主机
            // username: '', // 需要Redis >= 6
            // password: '',
            // db: 0, // 默认为0
            // tls: {}, // tls/ssl
            // },
        },
    },
    // 模块支持
    modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@nuxt/content', '@nuxt/icon', '@nuxt/image', '@morev/vue-transitions/nuxt', 'nuxt-gtag'],
    gtag: {
        id: '',
        enable: process.env.NODE_ENV === 'production',
    },
    // 配置自动导入规则
    imports: {
        dirs: ['./types/**', './components/**', './composables/**'],
        global: true,
    },
    // 组件配置 // 关闭 路径自动导入组件 // https://nuxt.com.cn/docs/guide/directory-structure/components
    // components: [],
    // content配置
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            highlight: {
                theme: 'dracula',
                default: 'dracula',
                dark: 'github-dark',
            },
        },
        markdown: {
            toc: {
                depth: 5,
                searchDepth: 5,
            },
        },
    },
    // tailwindcss: {
    //     cssPath: '~/assets/css/main.css',
    // },
    // https://nuxtjs.org.cn/modules/icon
    icon: {
        customCollections: [
            {
                prefix: 'my-icon',
                dir: './assets/my-icons', //use:  <Icon name="my-icon:foo" />
            },
        ],
    },
    // image配置
    // https://blog.csdn.net/weixin_44531811/article/details/136151110
    image: {
        inject: true,
        provider: 'twicpics', // 这里是默认的twicpics, 可以随便用provider中的任意一项，但不能用ipx，目前是存在一些问题的；
        domains: ['mom-bullet.oss-cn-shanghai.aliyuncs.com'],
        twicpics: {
            baseURL: '', // 设置空，作为默认的
        },
        aliyun: {
            // 配置阿里云cdn，开发时先丢到本地的public目录下，上线后，将public目录丢到cdn上即可
            baseURL: 'https://mom-bullet.oss-cn-xxxx.aliyuncs.com/xxxx/public/',
        },
    },
    // vue transiton
    vueTransitions: {
        // The same options as in the plugin itself.
        // You will get an autocomplete using Nuxt 3.
    },
    // 环境配置
    devServer: {
        port: 3000,
        host: '0.0.0.0',
    },

    colorMode: {
        classSuffix: '',
        preference: 'dark',
        fallback: 'light',
    },
})
