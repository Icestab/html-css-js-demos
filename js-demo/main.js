var div = document.getElementById('d')
document.onmousedown = (e) => {
    div.style.top = e.clientY + 'px'
    div.style.left = e.clientX + 'px'
}
