function getValueA() {
    return document.getElementById('a').value;
}
function getValueB() {
    return document.getElementById('b').value;
}
function setResult(valueAsign) {
    document.getElementById('c').value = valueAsign;
}
function Tong(a, b) {
    return parseFloat(a) + parseFloat(b);
}
function Hieu(a, b) {
    return parseFloat(a) - parseFloat(b);
}
function Tich(a, b) {
    return parseFloat(a) * parseFloat(b);
}
function Thuong(a, b) {
    return parseFloat(a) / parseFloat(b);
}    