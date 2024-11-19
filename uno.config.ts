import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
export default defineConfig({
    // ...UnoCSS options

    extendTheme: (theme) => {
        return {
            ...theme,
            breakpoints: {
                ...theme.breakpoints,
                // sm: '375px', // 定义 sm 为常规手机宽度
                // md: '768px', // 定义 md 为平板宽度
                // lg: '1024px', // 定义 lg 为笔记本宽度
                // xl: '1280px', // 定义 xl 为更大屏幕
            },
            colors: {
                ...theme.colors,
                veryCool: '#f9e3e8', // class="text-very-cool"
                brand: {
                    primary: 'hsl(var(--hue, 217) 78% 51%)', // class="bg-brand-primary"
                },
            },
        }
    },
    shortcuts: [
        [
            'btn',
            'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
        ],
    ],
    presets: [presetUno()],
})
