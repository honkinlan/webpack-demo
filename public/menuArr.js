const searchArr = [
    {
        name: '百度',
        url: 'https://www.baidu.com/'
    },
    {
        name: '知乎搜狗',
        url: 'https://zhihu.sogou.com/'
    },
    {
        name: '必应',
        url: 'https://cn.bing.com/'
    }
]
const search = {
    name: '搜索工具',
    children: searchArr
}
const topList = [
    {
        name: '测试',
        url: 'https://www.baidu.com/'
    }
]
export default [...topList, search]