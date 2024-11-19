<template>
    <div class="card bg-gray-100 border rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
        <div :key="img" class="animate__animated animate__zoomIn grid place-items-center">
            <NuxtImg
                :src="`/img/mbti/${img}.svg`"
                class="pt-20px bg-center card-image min-h-260px rounded-lg max-h-[8rem] hover:scale-105 transition-transform duration-300"
            />
        </div>
        <!-- 底部描述部分 -->
        <div class="card-footer flex justify-between items-center p-4 pb-2 bg-gray-100 animate__animated animate__zoomIn min-h[60px]">
            <!-- 左侧描述 -->
            <div @click="isExpanded = !isExpanded" :class="['text-#2a2a2a', 'text-lg', 'text-left', 'flex-2', 'font-bold', 'min-w-[200px]']">
                <!-- <transition-expand :appear="isExpanded"> -->
                <p :class="{ 'line-clamp-2': isExpanded, animate__animated: !isExpanded, animate__fadeInRight: !isExpanded, animate__fadeInLeft: isExpanded }">
                    {{ desc }}</p
                >
                <!-- <p :class="{ 'line-clamp-2': false }" v-else> {{ desc }}</p> -->
                <!-- </transition-expand> -->
            </div>
            <p class="w-20px"></p>
            <!-- 右侧名称 -->
            <div class="text-#2a2a2a font-bold text-sm flex-3 min-w-[80px]" @click="handlePageContent">
                <div
                    class="px-1 rounded-md hover:scale-105 transition-all duration-300 text-center"
                    v-for="(part, index) in type?.split('/') || []"
                    :key="index"
                    >{{ part }}</div
                >
            </div>
        </div>
        <!-- 左下角固定 -->
        <div class="animate__animated animate__fadeInDown pb-4 px-4">
            <span
                :style="{ 'background-color': bgColor, color: mainColor }"
                class="px-2 py-1 text-sm rounded-md hover:scale-105 transition-all duration-300 text-center"
                :src="img"
                >{{ name }}</span
            >
        </div>
    </div>
</template>

<script lang="ts" setup>
    interface Props {
        id?: number
        name: string
        desc: string
        img: string
        type: string
        bgColor?: string
        mainColor?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        id: 1,
        name: 'The Strategic Logical Minds',
        type: '',
        img: 'https://via.placeholder.com/300x200.png?text=Card+Image',
        desc: 'They value intelligence and knowledge, often pioneering innovative solutions and understanding intricate systems.',
    })
    const isExpanded = ref(false)
    const handlePageContent = () => {
        console.log('handlePageContent==前往详情页')
        navigateTo(`/blog/forth-post`)
    }
</script>

<style scoped>
    .card {
        min-width: 300px; /* 卡片宽度 */
    }
    .card-image img {
        /* 确保图片宽高自适应 */
        display: block;
        min-height: 200px;
    }
    .card-image {
        /* 确保图片宽高自适应 */
        min-height: 200px;
    }
</style>
