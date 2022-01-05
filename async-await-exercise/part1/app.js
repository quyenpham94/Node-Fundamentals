let favoriteNo = 17;
let baseURL = "http://numbersapi.com";

// 1.
async function part1() {
    let data = await $.getJSON(`${baseURL}/${favoriteNo}?json`);
    console.log(data);
}
part1();

// 2.
const favoriteNos = [5, 10, 15];
async function part2() {
    let data = await $.getJSON(`${baseURL}/${favoriteNos}?json`);
    console.log(data);
}
part2();

// 3.
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4}, () => $.getJSON(`${baseURL}/${favoriteNo}?json`))
    );
    facts.forEach(data => {
        $("body").append(`<p>${data.text}</p>`);
    });   
}
part3();