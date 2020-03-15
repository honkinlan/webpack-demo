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
    }
]
const socialArr = [
    {
        name: 'segmentfault',
        url: 'https://segmentfault.com/'
    },
    {
        name: '掘金',
        url: 'https://juejin.im/timeline'
    }
]
const frontendArr = [
    {
        name: 'Element',
        url: 'https://element.eleme.cn/#/zh-CN/component/layout'
    },
    {
        name: 'Ant Design',
        url: 'https://ant.design/components/button-cn/'
    },
    {
        name: 'React',
        url:'https://react.docschina.org/docs/thinking-in-react.html'
    },
    {
        name: 'Vue',
        url: 'https://cn.vuejs.org/v2/api/'
    },
    {
        name: 'ES6',
        url: 'https://es6.ruanyifeng.com/'
    }
]
const otherArr = [
    {
        name: '百度翻译',
        url: 'https://fanyi.baidu.com/'
    },
    {
        name: '有道笔记',
        url: 'http://note.youdao.com/'
    },
    {
        name: 'JSON解析',
        url: 'https://www.json.cn/'
    },
    {
        name: 'MD编辑',
        url: 'https://www.mdeditor.com/'
    },
    {
        name: '渐变工具',
        url: 'https://www.grabient.com/'
    },
    {
        name: 'pixabay',
        url: 'https://pixabay.com/'
    }
]
const search = {
    name: '搜索',
    children: searchArr
}
const social = {
    name: '社区',
    children: socialArr
}
const frontend = {
    name: '前端',
    children: frontendArr
}
const other = {
    name: '其他',
    children: otherArr
}
const topList = [
    {
        name: '测试',
        url: 'https://www.baidu.com/'
    }
]
// 菜单数据
let data = [search, frontend, social, other];
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