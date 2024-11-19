export default defineEventHandler(async (event) => {
    console.log('sbsbsb')
    const mbtiId = getRouterParam(event, 'id')
    console.log('apimbtiId', mbtiId)
    if (mbtiId) return mbtiInfoMap[mbtiId]
})

const typeInfoList: TypeInfo[] = [
    {
        id: 1,
        name: '类型1',
        desc: '这是类型1的描述',
        img: 'https://via.placeholder.com/100x100?text=Type1',
    },
    {
        id: 2,
        name: '类型2',
        desc: '这是类型2的描述',
        img: 'https://via.placeholder.com/100x100?text=Type2',
    },
    {
        id: 3,
        name: '类型3',
        desc: '这是类型3的描述',
        img: 'https://via.placeholder.com/100x100?text=Type3',
    },
]
const typeInfoList2: TypeInfo[] = [
    {
        id: 1,
        name: '22类型1',
        desc: '22这是类型1的描述',
        img: 'https://via.placeholder.com/100x100?text=Type1',
    },
    {
        id: 2,
        name: '22类型2',
        desc: '22这是类型2的描述',
        img: 'https://via.placeholder.com/100x100?text=Type2',
    },
    {
        id: 3,
        name: '类型3',
        desc: '这是类型3的描述',
        img: 'https://via.placeholder.com/100x100?text=Type3',
    },
]

const mbtiData: MBTI = {
    id: 1,
    name: '分析家',
    desc: '分析家包含四种类型，代表了充满战略性思维的角色。',
    headTitle: '分析家',
    totalBgImg: 'path/to/bg-image.jpg', // 替换为背景图路径
    typeList: [
        {
            id: 1,
            name: '建筑师',
            desc: '富有想象力和战略性思维，一切皆在计划之中。',
            img: 'path/to/architect-image.jpg', // 替换为建筑师图片路径
        },
        {
            id: 2,
            name: '逻辑学家',
            desc: '具有创造力的发明家，对知识有着不可抑制的渴望。',
            img: 'path/to/logician-image.jpg', // 替换为逻辑学家图片路径
        },
        {
            id: 3,
            name: '指挥官',
            desc: '大胆、富有想象力且意志强大的领导者，总能找到创新解决方法。',
            img: 'path/to/commander-image.jpg', // 替换为指挥官图片路径
        },
        {
            id: 4,
            name: '辩论家',
            desc: '聪明好奇的思考者，无法抵挡智力挑战的诱惑。',
            img: 'path/to/debater-image.jpg', // 替换为辩论家图片路径
        },
    ],
}

const mbtiData2: MBTI = {
    id: 2,
    name: 'MBTI类型2',
    // 概括
    headTitle: 'The Explore22',
    desc: '2222后端来的这是MBTI类型的描述,后端来的这是MBTI类型的描述后端来的这是MBTI类型的描述',
    totalBgImg: 'https://via.placeholder.com/500x500?text=MBTI',
    typeList: typeInfoList2,
}

const analysts: MBTI = {
    id: 1,
    name: '分析家',
    desc: '分析型人格，以逻辑性和创意为导向。',
    headTitle: '分析家',
    totalBgImg: 'path-to-bg-image',
    bgColor: '#e7dfea',
    mainColor: '#8861a4',
    typeList: [
        {
            id: 1,
            name: '建筑师',
            desc: '富有想象力和战略性思维，一切皆在计划之中。',
            type: 'INTJ-A / INTJ-T',
            img: 'intj-architect',
        },
        {
            id: 2,
            name: '逻辑学家',
            desc: '具有创造力的发明家，对知识有着不可抑制的渴望。',
            type: 'INTP-A / INTP-T',
            img: 'intp-logician',
        },
        {
            id: 3,
            name: '指挥官',
            desc: '大胆，富有想象力且意志强大的领导者，总能找到创造性解决方法。',
            type: 'ENTJ-A / ENTJ-T',
            img: 'entj-commander',
        },
        {
            id: 4,
            name: '辩论家',
            desc: '聪明好奇的思考者，无法抵挡智力挑战的诱惑。',
            type: 'ENTP-A / ENTP-T',
            img: 'entp-debater',
        },
    ],
}
const diplomats: MBTI = {
    id: 2,
    name: '外交家',
    desc: '以人际关系和愿景为导向的理想主义者。',
    headTitle: '外交家',
    totalBgImg: 'path-to-bg-image',
    bgColor: '#d6ece3',
    mainColor: '#33a474',
    typeList: [
        {
            id: 1,
            name: '提倡者',
            desc: '安静神秘，但非常鼓舞人心且不知疲倦的理想主义者。',
            type: 'INFJ-A / INFJ-T',
            img: 'infj-advocate',
        },
        {
            id: 2,
            name: '调停者',
            desc: '富有诗意，善良且无私的人，总是热衷于帮助正义事业。',
            type: 'INFP-A / INFP-T',
            img: 'infp-mediator',
        },
        {
            id: 3,
            name: '主人公',
            desc: '具有魅力并能激励人心的领导者，能够让听众为之着迷。',
            type: 'ENFJ-A / ENFJ-T',
            img: 'enfj-protagonist',
        },
        {
            id: 4,
            name: '竞选者',
            desc: '充满活力，富有创意，善于交际的自由之人，总能找到微笑的理由。',
            type: 'ENFP-A / ENFP-T',
            img: 'enfp-campaigner',
        },
    ],
}
const sentinels: MBTI = {
    id: 3,
    name: '守护者',
    desc: '务实且可靠，注重责任感和忠诚。',
    headTitle: '守护者',
    totalBgImg: 'path-to-bg-image',
    bgColor: '#d9eaf0',
    mainColor: '#4298b4',
    typeList: [
        {
            id: 1,
            name: '物流师',
            desc: '务实且注重事实的人，可靠性无可怀疑。',
            type: 'ISTJ-A / ISTJ-T',
            img: 'istj-logistician',
        },
        {
            id: 2,
            name: '守卫者',
            desc: '非常专注和热情的保护者，总是随时准备保护他们所爱的人。',
            type: 'ISFJ-A / ISFJ-T',
            img: 'isfj-defender',
        },
        {
            id: 3,
            name: '总经理',
            desc: '出色的管理者，在管理事物或人的方面无与伦比。',
            type: 'ESTJ-A / ESTJ-T',
            img: 'estj-executive',
        },
        {
            id: 4,
            name: '执政官',
            desc: '非常关心他人，善于社交，受人欢迎，总是乐于助人。',
            type: 'ESFJ-A / ESFJ-T',
            img: 'esfj-consul',
        },
    ],
}
const explorers: MBTI = {
    id: 4,
    name: '探险家',
    desc: '冒险精神、即兴能力与灵活性兼备的实干家。',
    headTitle: '探险家',
    totalBgImg: 'path-to-bg-image',
    bgColor: '#f9eed7',
    mainColor: '#e4ae3a',
    typeList: [
        {
            id: 1,
            name: '鉴赏家',
            desc: '大胆而实际的实验家，擅长使用各种形式的工具。',
            type: 'ISTP-A / ISTP-T',
            img: 'istp-virtuoso',
        },
        {
            id: 2,
            name: '探险家',
            desc: '灵活有魅力的艺术家，时刻准备着探索和体验新鲜事物。',
            type: 'ISFP-A / ISFP-T',
            img: 'isfp-adventurer',
        },
        {
            id: 3,
            name: '企业家',
            desc: '聪明，充满活力且洞察力极强的人，真正喜欢充满刺激和危险的生活。',
            type: 'ESTP-A / ESTP-T',
            img: 'estp-entrepreneur',
        },
        {
            id: 4,
            name: '表演者',
            desc: '精力充沛、热情，总是心血来潮-有他们在身边，生活永远不会无聊。',
            type: 'ESFP-A / ESFP-T',
            img: 'esfp-entertainer',
        },
    ],
}
const mbtiInfoMap: Record<string, MBTI> = {
    '1': analysts,
    '2': diplomats,
    '3': sentinels,
    '4': explorers,
}
