const form = document.querySelector('form');
const pokeImg = document.querySelector('#poke-img');
const pokeName = document.querySelector('#poke-name');
const inputName = document.querySelector('#name-input');

const fetchAPI = () => {
    const result = fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => response.ok && response.json())
        .then((data) => data.name);

    return result;
}

const showInfo = async (pokemon) => {

    pokeImg.src = `.img/poke-louding`;
    
    const pokeInfo = await fetchAPI(pokemon);

    if (!pokeInfo) {
        pokeImg.src = `.img/poke-not-founding.png`;
        pokeName.innerText = `Pokemon não encontrado`;
    }

    pokeImg.src = `${pokeInfo.sprites.front_default}`;
    pokeName.innerText = `${pokeInfo.name}`;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    showInfo(inputName.value);
})