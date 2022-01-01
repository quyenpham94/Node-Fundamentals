// function wait3Seconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000)
//     })

// }
// wait3Seconds()
// .then(() => console.log("ALL DONE!"))
// .catch(() => console.log("ERROR!"))

// console.log("STILL WAITING")

// const h1 = document.querySelector('h1');
// setTimeout(function(){
//     h1.style.color= 'red'
//     setTimeout(() => {
//         h1.style.color = 'orange'
//         setTimeout(() => {
//             h1.style.color = 'yellow'
//             setTimeout(() => {
//                 h1.style.color = 'green'
//             }, 1000)
//         }, 1000)
//     }, 1000)

// }, 1000)

// //////////////////////////////////////////////
// const h1 = document.querySelector('h1');
// function changeColor(el, color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             el.style.color = color;
//             resolve()
//         }, 1000)

//     })

// }

// changeColor(h1,'red')
//     .then(() => changeColor(h1, "orange"))
//     .then(() => changeColor(h1, "yellow"))
//     .then(() => changeColor(h1, "green"))
//     .then(() => changeColor(h1, "blue"))
//     .then(() => changeColor(h1, "pink"))
//     .then(() => changeColor(h1, "purple"))


// ///////////////////////////////////////////////////

// recreating Axios




// request.open('GET', 'https://swapi.co/api/planets/1/');

// // Send It!
// request.send();

// function get(url){
//     const request = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         request.onload = function () {
//             if (request.readyState !== 4) return;

//             // check status code
//             if (request.status >= 200 && request.status < 300) {
//                 resolve(JSON.parse(request.response))

//             } else {
//                 reject({
//                     msg: 'Server Error',
//                     status: request.status,
//                     request: request
//                 })
//             }
//         }
//         request.onerror = function handleError() {
//             request = null;
//             reject('NETWORK ERROR!')
//         };
//         request.open('GET', url);
//         request.send();
//     })

// }

// get('https://swapi.co/api/planets/1/')
// .then(res => {
//     console.log(res)
//     return get('https://swapi.co/api/planets/2/')
// })
// .catch(err => console.log(err))


/////////////////////////////////////////////

// promise all and race
let fourPokemonPromises = [];

for (let i = 1; i < 5; i++) {
    fourPokemonPromises.push(
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    );
}

fourPokemonPromises.push(axios.get('EFDGIJRGIR'))

Promise.all(fourPokemonPromises)
    .then(pokemonArr => {
        for(res of pokemonArr){
            console.log(res.data.name)
        }
        
    })
        
  
    .catch(err => console.log(err));
