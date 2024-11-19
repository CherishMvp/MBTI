// 该类型文件设置了自动导入 ，文件名需要设置为*.d.ts才会在vue起作用，ts不需要
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
    headTitle: string
    totalBgImg: string
    mainColor?: string
    bgColor?: string
    typeList: TypeInfo[] | any[]
}
