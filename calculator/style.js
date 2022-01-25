//variables

let radice = document.querySelector('.rad');
let potenza = document.querySelector('.pot');
let del = document.querySelector('.delete');
let cancella = document.querySelector('.canc');
let display = document.querySelector('input');
let buttons = document.querySelectorAll('.num[value]');
let equal = document.querySelector('.result');

//functions

function risultato(){
let c = display.value;
display.value = eval(c);
}

function radic(){
let s = display.value;
display.value = Math.sqrt(s);
}

function numero(){
const value = event.target.attributes["value"].nodeValue;
display.value += value;
}

function elevat(){
display.value *= display.value;
}

function clear(){
display.value = '';
}

function canc(){
let a = display.value;
display.value = a.substring(0, a.length-1);
}

// events
buttons.forEach(currentBtn => {
currentBtn.addEventListener('click', numero)});
radice.addEventListener('click', radic);
potenza.addEventListener('click', elevat);
del.addEventListener('click', clear);
cancella.addEventListener('click', canc);
equal.addEventListener('click', risultato);
