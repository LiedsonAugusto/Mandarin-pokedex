import axios from "axios"
let arrayTipos = ["default", "ice", "grass", "psychic", "fire", "water", "bug", "electric", "ground", "rock", "normal"]
let arrayRGBS =["white", "rgb(174, 255, 255)", "rgb(166, 240, 166)", "rgb(255, 191, 202)", "rgb(225, 128, 88)", "rgb(136, 168, 255)", "rgb(218, 255, 148)", "rgb(255, 255, 130)", "rgb(228, 176, 98)", "rgb(170, 136, 82)", "rgb(192, 192, 192)"]

export async function armazenarNoSessionStorage(){
    try{
        const response = await axios.get("https://dev-api-teste.mandarin.com.br/pokemons")
        const data = response.data
        for (let i = 0; i < 15; i++){
            sessionStorage.setItem(`${data[i].id}`, JSON.stringify(data[i]))
        }
    } catch(error){
        console.log(error);
    }
    
}

export async function getPokemons(id, setNome,setTipo,setImage, setBackground, setCorDoMeio){
    let pokemonStorage = JSON.parse(sessionStorage.getItem(`${id}`))
    if (pokemonStorage === null){
        try{
            const response = await axios.get("https://dev-api-teste.mandarin.com.br/pokemons")
            const data = response.data
            setarPokemon(data[0], setNome,setTipo,setImage, setBackground, setCorDoMeio)
        } catch(error){
            console.error(error);
        }
    } else {
        setarPokemon(pokemonStorage, setNome,setTipo,setImage, setBackground, setCorDoMeio)
    }
    
}

export async function getPokemonPorNome(nome, setId){
    try {
        const response = await axios.get(`https://dev-api-teste.mandarin.com.br/pokemons?name=${nome}`)
        const data = response.data
        setId(data[0].id)
        return 1
    } catch(error){
        return 0
    }

}


function setarPokemon(data, setNome,setTipo,setImage, setBackground, setCorDoMeio){
    setTimeout(() => {
        setImage(data.image_url)
        setBackground(data.background_image_url)
        setNome(data.name)
        setTipo(data.category)
        setarBackground(data.category.toLowerCase(), setCorDoMeio)
    }, 340);
}

function setarBackground(dataCategory, setCorMeio){
    for (let i = 0; i < arrayTipos.length; i++){
      if (arrayTipos[i] === dataCategory){
        setCorMeio(arrayRGBS[i])
        break
      }
    }
  }