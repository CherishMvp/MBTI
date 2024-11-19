export const useUseScreenWidth = () => {
    const width = ref(400)

    const isMobile = computed({
        get: () => width.value < 450,
        set: (value: boolean) => {
            width.value = value ? 399 : 400
        },
    })

    // 更新宽度的函数
    const updateWidth = () => {
        width.value = window.innerWidth
        console.log('after', width.value)
    }

    // 监听页面加载和窗口尺寸变化
    onMounted(() => {
        window.addEventListener('resize', updateWidth)
        width.value = window.innerWidth
        console.warn('width', width.value)
    })

    // 清除事件监听器
    onUnmounted(() => {
        window.removeEventListener('resize', updateWidth)
    })

    return {
        width,
        isMobile,
    }
}
