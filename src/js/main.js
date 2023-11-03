let card = document.querySelectorAll('.card');

card.forEach(element => {
 let cardBtn = element.querySelector('.card-brands__more'),
     cardBtnText = cardBtn.querySelector('p'),
     cardBottom = element.querySelector('.card-bottom');

  cardBtn.addEventListener('click', function () {
   if (cardBtnText.textContent == 'More info') {
    cardBtnText.textContent = 'Hide info';
   } else{
    cardBtnText.textContent = 'More info';
   }
   
   cardBottom.classList.toggle('active');
 });

 let cardRate = element.querySelector('.card-top__rate'),
     cardNum = Math.round(cardRate.querySelector('.card-top__rate__text').textContent),
     cardStars = element.querySelectorAll('.card-top__rate__stars svg');

 for (let i = 0; i <= cardStars.length; i++) {
  if ( cardNum > i ) {
   cardStars[i].classList.add('active');
  }
 }
});