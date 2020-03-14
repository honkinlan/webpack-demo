// 谷歌需要在设置里面设置始终允许当前域名显示弹出窗口和重定向，
// 不然有些页面会直接重定向‘反噬’当前页面。。

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
    },
    {
        name: '豆瓣电影',
        url: 'https://www.zhihu.com/explore'
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