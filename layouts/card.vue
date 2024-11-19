<template>
    <div :style="{ 'background-color': layoutCustomProps.title }" class="min-h-screen flex flex-col min-w-full">
        <!-- 顶部 Header -->
        <header class="px-4 pt-5 line-clamp-1 sm:pb-1">
            <slot name="header">Default Header</slot>
        </header>

        <!-- 主体内容区域 -->
        <div class="flex flex-1 flex-wrap lg:flex-nowrap">
            <!-- 左侧区域 -->
            <aside class="w-full lg:w-1/3 p-4 flex flex-col justify-between" :style="{ 'background-color': layoutCustomProps.title }">
                <slot name="left">
                    <div class="h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <p class="text-gray-600 text-center">Default Left Content</p>
                    </div>
                </slot>
            </aside>

            <!-- 右侧区域 -->
            <main class="w-full lg:w-2/3 px-4 pb-4 lg:pt-4 lg:pl-1" :style="{ 'background-color': layoutCustomProps.title }">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                    <slot name="right">
                        <!-- 默认卡片 -->
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center shadow-sm"> </div>
                    </slot>
                </div>
            </main>
        </div>
    </div>
</template>
<script setup lang="ts">
    type ILayoutCustomProps = {
        title: string
    }
    const layoutCustomProps = useAttrs() as Readonly<ILayoutCustomProps>
    console.log('layoutCustomProps', layoutCustomProps)
</script>
<style scoped>
    /* 确保页面撑满 */
    html,
    body {
        height: 100%;
    }
    @media (min-width: 300px) {
        body {
            min-width: 300px;
        }
    }
</style>
