import { useEffect, useState } from "react"
import axios from 'axios'

export default function useFetchcontent() {

    const [pokemons,setPokemons] = useState([]);
    useEffect(()=>{
        (async()=>{
            const {data} = await  axios.get('https://pokeapi.co/api/v2/pokemon/')
            const results = data.results;
            for(let i = 0;i<results.length;i++){
                 const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
                 const requiredData = {
                    ['stats']:data.stats,
                    ['weight']:data.weight,
                    ['height']:data.height,
                    ['base_experience']:data.base_experience,
                    ['order']:data.order,
                    ['imageURL']:data.sprites.other.dream_world.front_default,
                }
                results[i] = {...results[i],...requiredData}
            } 
            setPokemons(results)
        })();
    },[])
    return pokemons;
}
