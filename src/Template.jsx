import Stats from './stats.jsx'
import {motion} from 'framer-motion'
export default function Template({pokemon,index}) {
  return (
    <div style = {{top:`${index*4}px`}} className = {`h-screen flex justify-center max-md:items-center items-end sticky lg:pb-12`}>
        <div className = 'w-[70%] h-[80%] max-md:h-[50%] max-md:w-[90%]' >
            <div className = 'grid md:grid-cols-2 max-md:grid-rows-2 h-full bg-[#141414] rounded-lg border-white border-y overflow-hidden'>
                <div className = 'flex items-center md:flex-col gap-4 justify-around md:justify-center'>
                    <motion.img initial = {{opacity:0.9}} whileHover = {{scale:1.05,y:'-5px',opacity:1}} className = 'max-w-[40%] min-w-[40%] my-1'src={pokemon.imageURL} alt={pokemon.name} />
                    <span className = 'anton-regular text-[4.5vw] text-neutral-100 capitalize'>{pokemon.name}</span>
                </div>
                <div className = 'flex flex-col justify-center'>
                    <Stats title = "Stats/Metrics" clusterCloudOf4 = {[`Health points: ${pokemon.stats[0].base_stat}`,`Attack: ${pokemon.stats[1].base_stat}`,`Defense: ${pokemon.stats[2].base_stat}`,`Speed: ${pokemon.stats[5].base_stat}`]} row={1}/>
                    <Stats title = "Data" clusterCloudOf4 = {[`Base experience: ${pokemon.base_experience}`,`Weight: ${pokemon.weight}`,`Height: ${pokemon.height}`,`Order: ${pokemon.order}`]} row={0} />
                    <Stats title = "Specials" clusterCloudOf4 = {[,`Special-attack: ${pokemon.stats[3].base_stat}`,`Special-defense: ${pokemon.stats[4].base_stat}`]} row={2}/>
                </div>
            </div>        
        </div>
    </div>
  )
}
