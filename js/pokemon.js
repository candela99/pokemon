function getPokemon(idPokemon) {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + idPokemon + '/';

    fetch(url)
.then(response => response.json()) //then es una promesa, response es la respuesta del servidor y la convertimos en json
.then(data => { //data es el resultado de response.json
    
    let element = document.getElementById('element'); //traigo el elemento html con ese id
    element.innerHTML = `
    <p>${data.name}</p> 
    <p>${data.order}</p>
    <img src='${data.sprites.front_default}'/> 
    `; //inyecto un parrafo al documento html con el dato

    console.log(data); 
})
.catch(err => console.log(err))
}
