// body selector

let counterDisplay = document.querySelector('h1');
let counterAdd = document.querySelector('.counter-up');
let counterLess = document.querySelector('.counter-less');
let showReset = document.querySelector('.show-reset');

let count = 0;

displayReset()
displayUpgrade();
displayUp()
displayless()
reset()

// counter events

showReset.addEventListener('click', ()=> {
  reset();
  displayReset();

})

counterAdd.addEventListener('click', ()=> {
  count++;
  displayUpgrade()
  displayReset()
})

counterLess.addEventListener('click', ()=> {
  count--;
  displayUpgrade()
  displayReset()
})

// functions for upgrade display

function displayUpgrade(){
  counterDisplay.innerHTML = count;
}

function displayUp(){
  counterAdd.innerHTML = '+';
}
function displayless(){
  counterLess.innerHTML = '-';
}

// functions for show reset button and reset display

function displayReset(){
  if(count!=0 ){
    showReset.style.top='-10px';
  }
  else {
    showReset.style.top='-120px';
  }
}

function reset (){
  count = 0;
  counterDisplay.innerHTML = count;
}
