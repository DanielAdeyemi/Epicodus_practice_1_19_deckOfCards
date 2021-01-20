$(document).ready(function() {
  let numbers = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Quin', 'King'];
  let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  suits.forEach(function(suit) {
    numbers.forEach(function(number) {
      $('ul').append('<li>' + number + ' of ' + suit);
    })
  })
})