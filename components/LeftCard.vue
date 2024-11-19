<template>
    <div class="card bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col h-full w-full">
        <!-- 内容部分 -->
        <div class="p-x6 pb-6 pt-2 animate__animated animate__fadeInUp">
            <!-- 标题 -->
            <h2 class="text-2xl font-bold text-#000 mb-4">{{ name }}</h2>

            <!-- 类型标签 -->
            <div class="flex gap-1.5 mb-4 items-center">
                <text class="font-bold text-sm"> 类型:</text>
                <div class="px-0.2"></div>
                <span
                    v-for="type in typeList"
                    :key="type"
                    class="px-2 py-1 text-sm rounded-lg hover:scale-105 transition-all duration-300"
                    :style="{ 'background-color': bgColor, color: mainColor }"
                >
                    {{ type.name }}
                </span>
            </div>

            <!-- 描述文字 -->
            <div class="flex justify-between items-center" @click="handleShowMore">
                <p class="text-gray-600 text-sm">{{ desc }} </p>
                <Icon
                    v-if="isMobile"
                    :name="showMore ? 'line-md:chevron-up' : 'line-md:chevron-down'"
                    :style="{ color: mainColor }"
                    size="22"
                    class="w-6 h-6"
                />
            </div>
            <div class="sm:h-[60px]"></div>
            <!-- 背景图片 -->
            <transition-expand :appear="showMore">
                <div class="grid grid-cols-2 gap-1 animate__animated animate__zoomIn" v-if="showMore">
                    <!-- <dotlottie-player src="/img/mbti/lottie/enfj-protagonist.lottie" autoplay :loop="false" class="bg-cover bg-bottom w-full h-full"></dotlottie-player> -->
                    <NuxtImg
                        v-for="(type, index) in typeList"
                        :key="index"
                        :src="getImg(type.img)"
                        class="hover:scale-105 transition-transform duration-300 bg-cover bg-bottom w-full h-full"
                    />
                </div>
            </transition-expand>
        </div>
    </div>
</template>

<script lang="ts" setup>
    // 背景图片链接（替换为真实地址）

    interface TypeInfo {
        id?: number
        name: string
        desc: string
        img: string
    }
    interface MBTI {
        id?: number
        name: string
        desc: string
        totalBgImg: string
        mainColor?: string
        bgColor?: string
        typeList: TypeInfo[] | any[]
    }
    // 似乎还是没解决这个问题？
    const props = withDefaults(defineProps<MBTI>(), {
        id: 1,
        name: '1The Strategic Logical Minds',
        typeList: () => [{}],
        mainColor: '',
        bgColor: '',
        totalBgImg: 'https://via.placeholder.com/300x200.png?text=Background+Image',
        desc: 'They value intelligence and knowledge, often pioneering innovative solutions and understanding intricate systems.',
    })
    const showMore = ref(false)
    const { width, isMobile } = useUseScreenWidth()
    console.warn('isMobile', isMobile.value)
    if (isMobile.value) {
        showMore.value = true
    }
    console.log('xxx')
    console.log('props', props)

    const getImg = (img: string) => {
        return `/img/mbti/${img}.svg` // or a default image path

        // const filePath = `/img/mbti/lottie/${img}.lottie`
        // const response = await fetch(filePath, { method: 'HEAD' })
        // console.log('response', response)
        // if (response.ok) {
        //     return filePath
        // } else {
        //     return `/img/mbti/${img}.svg` // or a default image path
        // }
    }
    const handleShowMore = () => {
        showMore.value = !showMore.value
        console.log('showMore', showMore.value)
    }
</script>

<style scoped></style>
