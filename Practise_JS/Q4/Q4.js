function getValueA(){
    return document.getElementById('a').value;
}
function getValueB(){
    return document.getElementById('b').value;
}
function getValueC(){
    return document.getElementById('c').value;
}
function myFunction(valueAsign){
    document.getElementById('result') = valueAsign;
    var radio = document.getElementById('radio').value;
    if(radio=="Tìm số lớn nhất"){
        return TimMax(a,b,c);
    }
    else{
        return TimMin(a,b,c);
    }
}

function TimMax(a,b,c){
    if(parseFloat(a) > parseFloat(b) && parseFloat(a) > parseFloat(b)){
        return parseFloat(a);
    }
    else if(parseFloat(a) < parseFloat(b) && parseFloat(b) > parseFloat(c)){
        return parseFloat(c);
    }
    else{
        return parseFloat(c);
    }
}

function TimMin(a,b,c){
    if(parseFloat(a) < parseFloat(b) && parseFloat(a) < parseFloat(b)){
        return parseFloat(a);
    }
    else if(parseFloat(a) > parseFloat(b) && parseFloat(b) < parseFloat(c)){
        return parseFloat(b);
    }
    else{
        return parseFloat(c);
    }
}
