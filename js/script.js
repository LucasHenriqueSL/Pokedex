const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form  = document.querySelector('.form');
const input  = document.querySelector('.input_search');

const ButtonPrev  = document.querySelector('.btn-prev');
const ButtonNext  = document.querySelector('.btn-next');

let searchId = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if(APIResponse.status === 200){
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) =>{
  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);
    if(data){
      pokemonName.innerHTML = data.name;
      pokemonNumber.innerHTML = data.id;
      pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front-default'];
  
      input.value = '';
    }
    else{
      pokemonImage.getElementsByClassName.display = 'none';
      pokemonName.innerHTML = 'Not found :/';
      pokemonNumber.innerHTML = '';
    } 
}

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  renderPokemon(input.value.toLowerCase()); 
})
ButtonPrev.addEventListener('click', ()=>{
  
})
ButtonNext.addEventListener('click', ()=>{

})


renderPokemon(searchId);
