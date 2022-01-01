let favoriteNo = 17;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favoriteNo}?json`).then(data => {
    console.log(data);
});

// 2.
let favoriteNos = [5,10,15];
$.getJSON(`${baseURL}/${favoriteNos}?json`).then(data => {
    console.log(data);
});

// 3. 
Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${baseURL}/${favoriteNo}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});