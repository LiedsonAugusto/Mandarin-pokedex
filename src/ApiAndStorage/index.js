import axios from "axios"

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

function setarBackground (dataCategory, setCorMeio){
    switch(dataCategory){
      case "default":
        setCorMeio("white")
        break;
      case "ice":
        setCorMeio("rgb(174, 255, 255)")
        break
      case "grass":
        setCorMeio("rgb(166, 240, 166)")
        break
      case "psychic":
        setCorMeio("rgb(255, 191, 202)")
        break
      case "fire":
        setCorMeio("rgb(225, 128, 88)")
        break
      case "water":
        setCorMeio("rgb(136, 168, 255)")
        break
      case "bug":
        setCorMeio("rgb(218, 255, 148)")
        break
      case "electric":
        setCorMeio("rgb(255, 255, 130)")
        break
      case "ground":
        setCorMeio("rgb(228, 176, 98)")
        break
      case "rock":
        setCorMeio("rgb(170, 136, 82)")
        break
      case "normal":
        setCorMeio("rgb(192, 192, 192)")
        break
      default:
        setCorMeio("white")
        break;
    } 
  }