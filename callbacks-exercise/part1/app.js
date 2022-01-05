let favoriteNo = 17;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favoriteNo}?json`, function(data) {
    console.log(data);
});

// 2.
let favoriteNos = [5,10,15];
$.getJSON(`${baseURL}/${favoriteNos}?json`).then(data => {
    console.log(data);
});

// 3.
let facts = [];
$.getJSON(`${baseURL}/${favoriteNo}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${baseURL}/${favoriteNo}?json`, function(data) {
        facts.push(data.text);
        $.getJSON(`${baseURL}/${favoriteNo}?json`, function(data) {
            facts.push(data.text);
            $.getJSON(`${baseURL}/${favoriteNo}?json`, function(data) {
                facts.push(data.text);
                facts.forEach(fact => {
                    $("body").append(`<p>${fact}</p>`);
                });
            });
        });
    });    
});
