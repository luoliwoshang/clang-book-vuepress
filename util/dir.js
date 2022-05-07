// 读取指定文件夹下目录 
// children: [
//     {
//         text: "基本注意事项",
//         link: "/clang/tips/基本注意事项.md",
//     },
// ]
// 传入 /clang/tips 则返回 数组 [{text:文件名,link:文件路径}]
// export default (path) => {
// let files = fs.readdirSync(path);
// 与docs拼接路径
// console.log(path);
// }
// files();
module.exports = {
    tofile: (input_path) => {
        const fs = require('fs');
        const files = fs.readdirSync('./docs' + input_path);
        const output = [];
        // 遍历文件
        files.forEach(file => {
            // 获取文件名
            const file_name = file.split('.')[0];
            // 获取文件路径
            const file_path = input_path + '/' + file;
            // 获取文件后缀
            const file_extension = file.split('.')[1];
            // 判断是否是文件
            if (file_extension === 'md') {
                // 文件名
                output.push({
                    text: file_name,
                    link: file_path,
                });
            }
        }
        );
        return output
    }

} 