let isShow = false;
function Showtable() {
    isShow = !isShow
    let table = document.getElementById('table');
    table.style.display = isShow ? "inline-block" : "none";
}