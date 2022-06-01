let result = document.getElementById('inp');
let submit = document.getElementById('sub');
let clear = document.getElementById('clear');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let point = document.getElementById('point');
let division = document.getElementById('division');
let minus = document.getElementById('minus');
let add = document.getElementById('add');
let multiplication = document.getElementById('multiplication');



function allEvents() {
    one.addEventListener('click' , addOne);
    two.addEventListener('click' , addTwo);
    three.addEventListener('click' , addThree);
    four.addEventListener('click' , addFour);
    five.addEventListener('click' , addFive);
    six.addEventListener('click' , addSix);
    seven.addEventListener('click' , addSeven);
    eight.addEventListener('click' , addEight);
    nine.addEventListener('click' , addNine);
    zero.addEventListener('click' , addZero);
    point.addEventListener('click' , addPoint);
    clear.addEventListener('click' , clearAll);
    multiplication.addEventListener('click' , multiplicationAll);
    add.addEventListener('click' , addAll);
    division.addEventListener('click' , divisionAll);
    minus.addEventListener('click' ,  minusAll);
    submit.addEventListener('click' , showResult);
    
}
allEvents();



function addOne(e){
    result.value+= 1;
    e.preventDefault();
}
function addTwo(e){
    result.value+= 2;
    e.preventDefault();
}
function addThree(e){
    result.value+= 3;
    e.preventDefault();
}
function addFour(e){
    result.value+= 4;
    e.preventDefault();
}
function addFive(e){
    result.value+= 5;
    e.preventDefault();
}
function addSix(e){
    result.value+= 6;
    e.preventDefault();
}
function addSeven(e){
    result.value+= 7;
    e.preventDefault();
}
function addEight(e){
    result.value+= 8;
    e.preventDefault();
}
function addNine(e){
    result.value+= 9;
    e.preventDefault();
}
function addPoint(e){
    result.value+= '.';
    e.preventDefault();
}
function addZero(e){
    result.value+= 0;
    e.preventDefault();
}
function clearAll(e){
    result.innerHTML = '';
} 
function multiplicationAll(e){
    result.value+= '*';
    e.preventDefault();
}
function  minusAll(e){
    result.value+= '-';
    e.preventDefault();
}
function divisionAll(e){
    result.value+= '/';
    e.preventDefault();
}
function addAll(e){
    result.value+= '+';
    e.preventDefault();
}
function showResult(e){
    result.value=eval(result.value);
    e.preventDefault();
}