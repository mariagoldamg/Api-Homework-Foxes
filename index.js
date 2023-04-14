const button = document.querySelector (`#btn`);
const par = document.querySelector (`#par`);

button.addEventListener (`click`, foxFinder);

function foxFinder() {
    fetch ("https://randomfox.ca/floof/")
    .then (res=>res.json())
    .then (resReceived=>par.innerHTML = `<img src=${resReceived.image} width = 300px >`)
}

/*async function foxFinder() {
const showFox = await fetch ("https://randomfox.ca/floof/");
  
const foxReceived = await showFox.json();
console.log (foxReceived)
showImages(foxReceived)
}

function showImages (foxReceived){
    par.innerHTML = `<img src=${foxReceived.image} width = 300px >`
}*/


/*const button = document.querySelector(`#btn`);
const par = document.querySelector (`#par`)

button.addEventListener(`click`, getAdvice);

function getAdvice() {
    fetch ("https://api.adviceslip.com/advice")
    .then(res=>res.json())
    .then (resReceived=>par.textContent = `${resReceived.slip.advice}`);
}


async function adviceFinder(){
const data = await fetch("https://api.adviceslip.com/advice");

const dataReceived = await data.json();

showAdvice(dataReceived);
}

 function showAdvice (dataReceived){
   par.textContent = `${dataReceived.slip.advice}`

 } */