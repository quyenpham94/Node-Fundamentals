$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

// 1.
$.getJSON(`${baseURL}/new/draw/`, function(data) {
    let {suit, value} = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});


});