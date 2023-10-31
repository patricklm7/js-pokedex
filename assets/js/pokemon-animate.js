const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_shearch');
const buttonPrev = document.querySelector('#btn-prev');
const buttonNext = document.querySelector('#btn-next');

let shearchPokemon = 1;




const BuscaPokemon = async (pokemonanimate) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonanimate}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemonanimate) => {
    pokemonName.innerHTML = 'Loading...';
    const data = await BuscaPokemon	(pokemonanimate);
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    shearchPokemon = data.id;
}

function renderPokemonByName(pokemonName) {
    renderPokemon(pokemonName.toLowerCase())
};

form.addEventListener('submit', (event) =>{  
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    input.value = '';
})

buttonPrev.addEventListener('click', () =>{ 
    if (shearchPokemon > 1){  
    shearchPokemon -= 1;
    renderPokemon(shearchPokemon); }
})

buttonNext.addEventListener('click', () =>{  
    shearchPokemon += 1;
    renderPokemon(shearchPokemon);
})


