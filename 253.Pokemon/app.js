//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


for (let i = 1; i < 152; i++) {
    //Creacion de elementos
    const pokemon = document.createElement('div');
    const img = document.createElement('img');
    const label = document.createElement('span');
    const container = document.getElementById('container');

    //Agregando elementos al elemento principal y al body
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container.appendChild(pokemon);

    //Agregando caracteristicas a los elementos
    label.innerText = `#${i}`
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

}


