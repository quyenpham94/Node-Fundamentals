// async function getStarWarsFilms() {
//     console.log("Starting")
//     const res = await axios.get("https://swapi.co/api/films/")
//     console.log("ending")
//     console.log(res)
// }

// console.log("Starting!")
// axios.get("https://swapi.co/api/films/")
// .then(res => {
//     console.log("Ending!");
//     console.log(res.data);
// })

// ///// ColorChange Async Example
// const h1 = document.querySelector('h1');
// function changeColor(el, color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             el.style.color = color;
//             resolve()
//         }, 1000)

//     })

// }

// // changeColor(h1,'red')
// //     .then(() => changeColor(h1, "orange"))
// //     .then(() => changeColor(h1, "yellow"))
// //     .then(() => changeColor(h1, "green"))
// //     .then(() => changeColor(h1, "blue"))
// //     .then(() => changeColor(h1, "pink"))
// //     .then(() => changeColor(h1, "purple"))


// // await to return anything that have promise. await here is take turn to change the color, similar to .then above but cleaner and nicer
// async function rainbow(el) {
//     await changeColor(el, 'red')
//     await changeColor(el, 'orange')
//     await changeColor(el, 'yellow')
//     await changeColor(el, 'green')
//     await changeColor(el, 'blue')
//     await changeColor(el, 'pink')
//     await changeColor(el, 'purple')

// }

// rainbow(h1)

// const deck = {
//     async init() {
//         let res = await axios.get('https://deckofcardsapi.com/api/deck/new/')
//         this.deckId = res.data.deck_id;
//     },
//     async shuffle() {
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
//         console.log(res)
//     },
//     async drawCard(){
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
//         console.log(res.data)
//     }
// }

// class Pokemon {
//     constructor(id) {
//         this.id = id;
//         this.types = [];
//     }
//     async getInfo() {
//     let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
//        this.name = res.data.name;
//        for(let type of res.data.types ){
//             this.types.push(type.type.name)
//        }
//     }
// }

/// async function version. there is no callbacks in here

async function getThreePokemonAsync() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let {data: p1} = await axios.get(`${baseURL}/1`)
    console.log(p1.name)
    let {data: p2} = await axios.get(`${baseURL}/2`)
    console.log(p2.name)
    let {data: p3} = await axios.get(`${baseURL}/3`)
    console.log(p3.name)
}
