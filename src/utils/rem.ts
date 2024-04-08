// 移动端 rem适配

// 基准大小
const baseSize = 37.5
// 适配方案
function setRem() {
    const scale = document.documentElement.clientHeight / 750
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 1) + 'px'
}
// 初始化
setRem()

// 改变窗口大小时候 重新设置一下 rem
window.onresize = function () {
    setRem()
}

export default baseSize