<template>
    <!-- <div> -->
    <NuxtLayout name="card" :title="mbtiData?.bgColor">
        <!-- Header 内容 -->
        <template #header>
            <div class="flex justify-center items-center">
                <ClientOnly v-if="false">
                    <button
                        v-if="colorMode.value === 'light'"
                        name="light-mode"
                        title="Light"
                        class="hover:scale-110 transition-all ease-out hover:cursor-pointer"
                        @click="onClick('dark')"
                    >
                        <Icon name="icon-park:moon" size="20" />
                    </button>
                    <button
                        v-if="colorMode.value === 'dark'"
                        name="dark-mode"
                        title="Dark"
                        class="hover:scale-110 transition-all ease-out hover:cursor-pointer"
                        @click="onClick('light')"
                    >
                        <Icon name="noto:sun" size="20" />
                    </button>
                    <template #fallback>
                        <!-- this will be rendered on server side -->
                        <Icon name="svg-spinners:180-ring" size="20" />
                    </template>
                </ClientOnly>
            </div>
            <div class="text-3xl font-bold text-center flex justify-between overflow-hidden">
                <text class="title font-bold text-2xl line-clamp-1 overflow-hidden">{{ 'MBTI性格介绍' }}</text>
                <!-- <div @click="handleNextPage" class="title text-4 fw-400 line-clamp-1 overflow-hidden">{{ mbtiData?.headTitle }}</div> -->
                <div v-if="false" class="flex items-center justify-center">
                    <div
                        v-for="radius in ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']"
                        class="w-6 h-6 mx-1 rounded-full bg-light-blue"
                        :class="`ring-${radius}`"
                    ></div>
                </div>
                <!-- button -->
                <div class="flex">
                    <button class="rounded-md bg-gray-100 bg-op-50 border-none px p0 grid place-content-center" @click="handleIconClick('prev')">
                        <Icon name="line-md:chevron-left" :style="{ color: mbtiData?.mainColor }" size="20" class="w-6 h-6" />
                    </button>
                    <div class="px-4px"></div>
                    <button class="rounded-md bg-gray-100 bg-op-50 border-none px p0 grid place-content-center" @click="handleIconClick('next')">
                        <Icon name="line-md:chevron-right" :style="{ color: mbtiData?.mainColor }" size="20" class="w-6 h-6" />
                    </button>
                </div>
            </div>
        </template>

        <!-- 左侧内容 -->

        <template #left>
            <div class="h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <!-- <p class="text-gray-600 text-center">Default Left Content</p> -->
                <LeftCard v-if="mbtiData" v-bind="mbtiData" :class="leftCardClass" />
            </div>
        </template>

        <!-- 右侧内容 -->
        <template #right>
            <CardComponent
                v-for="(item, index) in mbtiData?.typeList"
                :bg-color="mbtiData?.bgColor"
                :main-color="mbtiData?.mainColor"
                :key="index"
                :class="animationClass"
                v-bind="item"
            />
        </template>
    </NuxtLayout>
    <!-- </div> -->
</template>

<script setup lang="ts">
    definePageMeta({
        layout: false, //配合  <NuxtLayout name="card"> </NuxtLayout> 才可以使用card布局中的自定义插槽
    })
    const animationClass = ref('animate__animated animate__zoomIn')
    const leftCardClass = ref('')
    function triggerAnimation(arrow: string) {
        leftCardClass.value = 'animate__animated animate__fadeInUp'
        // 动态赋值动画类
        animationClass.value = arrow == 'next' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight' // 使用 animate.css 的动画类

        // 动画结束后清除类名，避免重复动画
        setTimeout(() => {
            animationClass.value = ''
        }, 1000) // 1秒后清除动画类
    }
    const route = useRoute()
    const mbtiId = ref('1') // 这里假设路由是 /mbti/:id
    console.log('vuembtiId', mbtiId.value)
    // 根据 mbtiId 加载不同的数据
    // 手动触发
    // watch(mbtiId, async (newId, oldId) => {
    //     if (newId !== oldId) {
    //         // 当 mbtiId 变化时，手动触发 refresh
    //         await refreshMbtiData()
    //     }
    // })
    // 使用watch监听参数变化自动触发更新函数。需要注意key要是一样的不能变。如果不一样的话，watch不会触发
    const { data: mbtiData, refresh: refreshMbtiData } = await useAsyncData<MBTI>(
        `mbtiData `,
        (): Promise<MBTI> => $fetch<MBTI>(`/api/getmbti/${mbtiId.value}`),
        { watch: [mbtiId] },
    )
    console.log('mbtiData', mbtiData.value)
    const handlePageChange = async (direction: string) => {
        console.log('ss')
        const currentValue = parseInt(mbtiId.value)
        let nextPageValue: any
        if (direction === 'next') {
            nextPageValue = currentValue === 4 ? 1 : currentValue + 1
        } else if (direction === 'prev') {
            nextPageValue = currentValue === 1 ? 4 : currentValue - 1
        }
        mbtiId.value = nextPageValue.toString()
    }
    // 动态样式
    const dynamicClass = computed(() => {
        return mbtiId.value == '1' ? 'animate__fadeInRight' : 'animate__fadeInRight'
    })
    async function handleIconClick(direction: string) {
        await handlePageChange(direction)
        triggerAnimation(direction)
    }
    const show = ref(false)
    const colorMode = useColorMode()
    function onClick(val: string) {
        colorMode.preference = val
    }
</script>

<style scoped>
    html,
    body {
        margin: 0;
        padding: 0;
    }
    /* 下面我们会解释这些 class 是做什么的 */
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>
