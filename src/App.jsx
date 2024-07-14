
import { useRecoilValue } from "recoil"
import { useRef, useState } from "react"
import { useScroll, useTransform,motion } from 'framer-motion'
import loaderAtom from "./atoms.jsx"
import useFetchcontent from "./customHooks/useFetchcontent.jsx"
import Template from "./Template.jsx"
import beam from './assets/beam.png'

export default function App() {
    const pokemons = useFetchcontent() 
    const loader = useRecoilValue(loaderAtom)
    const [searchQuery,setSearchQuery] = useState('')
    const targetRef = useRef(null)
    const handleChange = (event)=>{
        setSearchQuery(event.target.value.toLowerCase())
    }

    const {scrollYProgress } = useScroll({
        target :targetRef,
        offset: ["start start","end end"]
    })
    const width = useTransform(scrollYProgress,[0,1],["0%","100%"])
  return (
    <>
        {loader && 
            <div className = 'fixed z-20 inset-0 backdrop-blur-sm flex justify-center items-center text-[#3e3d3d] text-3xl poppins-medium'> Loading...</div>}
        <div ref = {targetRef}>
            <div className = 'fixed top-12 w-screen flex justify-center z-10'>
                <input className = 'border-[#141414] border-2 outline-none text-[#33C8FE] caret-[#33C8FE] px-2 py-1 rounded-sm bg-[#141414] poppins-medium' type="text" placeholder="Search Pokemon" onChange = {handleChange} />
            </div>
            <div className = 'relative text-white'>
                {pokemons?.filter(pokemon=> {return pokemon.name.includes(searchQuery)}).map((pokemon,i)=>
                        <Template key = {i} pokemon = {pokemon} index = {i} />)}
            </div>
            <motion.div className = 'fixed inset-x-0 h-[0.15rem] z-10 top-6'
            animate = {{y:['0px','0.5px','-0.5px','0px']}}
            transition = {{repeat:Infinity}}
            >
                <motion.div className = 'relative h-full bg-[#E9FFFF] outline-2 outline outline-offset-0 outline-[#33C8FE] rounded-r-full'
                style = {{width}}>
                    <img className = 'absolute -top-[1.45rem] -right-1 max-w-32 min-w-32' src = {beam} alt="beam"/>
                </motion.div>
            </motion.div>
        </div>
    </>
  )
}
