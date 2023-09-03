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

export async function getPokemons(id, setNome,setTipo,setImage, setBackground){
    let pokemonStorage = JSON.parse(sessionStorage.getItem(`${id}`))
    if (pokemonStorage === null){
        try{
            const response = await axios.get("https://dev-api-teste.mandarin.com.br/pokemons")
            const data = response.data
            setarPokemon(data[0], setNome,setTipo,setImage, setBackground)
        } catch(error){
            console.log(error)
        }
    } else {
        setarPokemon(pokemonStorage, setNome,setTipo,setImage, setBackground)
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


function setarPokemon(data, setNome,setTipo,setImage, setBackground){
    setImage(data.image_url)
    setBackground(data.background_image_url)
    setNome(data.name)
    setTipo(data.category)
}