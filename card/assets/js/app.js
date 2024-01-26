const heartTouch = document.querySelector('.heart');
const envelope = document.querySelector('.envelope-top');
const card = document.querySelector('.card');
const heartOne = document.querySelectorAll('.small-heart-one, .small-heart-two, .small-heart-three,.small-heart-four,.small-heart-five');


function smallHeartOne(){
  for (i=0;i < heartOne.length; i++){
  heartOne[i].style.animationName='heart';
  }
}

function openEnvelope(){
  envelope.classList.add('swing-top-fwd')
}

heartTouch.addEventListener('click', () =>{
  openEnvelope()
  smallHeartOne()
  let timeOut = setTimeout(openCard,500)
  function openCard(){
    card.classList.add('slice-up')
  }
  let tooTip = document.querySelector('.tooltip').innerHTML ='Thanks';
})
