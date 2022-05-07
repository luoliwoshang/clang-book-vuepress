const { defaultTheme } = require('@vuepress/theme-default');
// const {tofile} = require('./util/dir');
const { tofile } = require('./util/dir');
module.exports = {
    lang: 'zh-CN',
    title: 'C语言学习记录',
    description: 'C语言学习记录',
    theme: defaultTheme({
        // 在这里进行配置
        sidebar: [{
            text: "C语言",
            link: "/clang/tips/基本注意事项.md",
            children: [
                {
                    text: "TIPS",
                    link: "/clang/tips/基本注意事项.md",
                    children: [
                        ...tofile('/clang/tips')
                    ]
                },]
        }]
    }),
}