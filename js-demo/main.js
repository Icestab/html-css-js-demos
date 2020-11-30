var div = document.getElementById('d')

var flag = false
var diffX, diffY = 0
var startX, startY = 0
div.onmousedown = (e) => {
    startX = e.clientX
    startY = e.clientY
    flag = true
}
document.onmouseup = (e) => {

    flag = false

}
document.onmousemove = (e) => {
    if (flag) {
        diffX = e.clientX - startX
        diffY = e.clientY - startY
        let nowX = parseInt(div.style.left) || 0
        let nowY = parseInt(div.style.top) || 0
        let goalX = (nowX + diffX) > 0 ? (nowX + diffX) : 0
        let goalY = (nowY + diffY) > 0 ? (nowY + diffY) : 0
        div.style.left = goalX + 'px'
        div.style.top = goalY + 'px'
        startX = e.clientX
        startY = e.clientY
    }
}
