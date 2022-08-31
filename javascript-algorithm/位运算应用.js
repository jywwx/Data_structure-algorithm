const NODE_STYLE = 1;
const NODE_CLASS = 1 << 1;
const NODE_CHILDREN = 1 << 2;


// 按位或 授权
let someNode = NODE_STYLE | NODE_CLASS;

// 按位与 鉴权 判断权限
const print =() =>{
    console.log(!!(someNode & NODE_STYLE),"NODE_STYLE")
    console.log(!!(someNode & NODE_CLASS),"NODE_CLASS")
    console.log(!!(someNode & NODE_CHILDREN),"NODE_CHILDREN")
}
print()

// 按位异或 取消授权
someNode = someNode^NODE_CLASS;
print()

