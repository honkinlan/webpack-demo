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
// 菜单数据
let data = [...topList, search];
// 初始id
let id = 0;

function addId(arr) {
    for (let i of arr) {
        id += 1;
        i.id = id.toString();
        if (i.children) {
            addId(i.children);
        }
    }
    return arr;
}
// 给菜单栏加上id
addId(data)
console.log()
export default data