import useFetchcontent from "./customHooks/useFetchcontent.jsx"
import Template from "./Template.jsx"
import ScrollYProgress from './scrollProgress.jsx'
import { useRef, useState } from "react"

export default function App() {
    const pokemons = useFetchcontent()
    const [searchQuery,setSearchQuery] = useState('');
    const targetRef = useRef(null);
    const handleChange = (event)=>{
        setSearchQuery(event.target.value.toLowerCase());
    }

  return (
    <div ref = {targetRef}>
        <span className = 'fixed z-20 top-12 left-2'>
            <input className = ' border-[#C58FFF] border-2 outline-none caret-[#C58FFF] px-2 py-1 rounded-sm bg-[#141414] text-neutral-100 poppins-medium' type="text" placeholder="Search by keyword" onChange = {handleChange} />
        </span>
        <div className = 'relative text-white'>
            {
                pokemons?.filter(pokemon=> {return pokemon.name.includes(searchQuery)}).map((pokemon,i)=>
                    <Template key = {i} pokemon = {pokemon} index = {i} />
            )}
        </div>
        <ScrollYProgress ref = {targetRef}/>
    </div>

  )
}
