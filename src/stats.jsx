import {motion,useAnimation } from 'framer-motion'

export default function Stats({title,clusterCloudOf4,row}) {
  const animateText = useAnimation();
  const animateCluster = useAnimation();
  const handleMouseEnter = ()=>{
    animateText.start({y:"0",opacity:0,transition:{
      opacity:{duration:0.3,ease:'easeOut'},
    }});
    animateCluster.start({y:"0",opacity:1,transition:{
      y:{duration:0.3}
    }});
  }

  const handleMouseLeave = ()=>{
    animateText.start({y:"2.3vw",opacity:1,transition:{
      ease:'easeOut',duration:0.3
    }
    })
    animateCluster.start({y:'2.3vw',opacity:0,transition:{
      y:{duration:0.3}
    }})
  }
  return (
    <div className = 'flex justify-center overflow-hidden bg-[#141414] '>
      <motion.div className = 'flex justify-center w-full text-[5vh] lg:text-[5vw] text-white anton-regular border-b-[0.25px] border-neutral-100/20 '
        onMouseEnter = {handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          <div className = 'flex justify-center relative'>
            <motion.div className = 'uppercase text-nowrap'
              initial = {{y:"2.3vw"}}
              animate = {animateText}
            >
                {title}
            </motion.div>
            <motion.div className = 'absolute inset-0'
              initial = {{y:'2.3vw',opacity:0}}
              animate = {animateCluster}
            >
                <ClusterCloud row={row} clusterCloudOf4 = {clusterCloudOf4}/>
            </motion.div>
          </div>
      </motion.div>
    </div>
  )
}
function ClusterCloud({clusterCloudOf4,row}){
  const colors = ['bg-[#BBBDFA] ring-[#BBBDFA]/60','bg-[#C1ED42] ring-[#C1ED42]/60','bg-[#FFFFFF] ring-[#FFFFFF]/60']
  return (
    <div className = 'h-full'>
      {clusterCloudOf4[0] && <span className = {`poppins-medium text-[0.75vw] ${colors[row]} text-black max-md:text-[1.5vw] lg:ring-[0.25vw] lg:border-[0.125vw] ring-[0.25vh] border-[0.125vh] text-nowrap border-black absolute px-1 rounded-full top-[30%] left-[5%]` } >{clusterCloudOf4[0]}</span>}
      {clusterCloudOf4[1] && <span  className = {`poppins-medium text-[0.75vw] ${colors[row]} text-black max-md:text-[1.5vw] lg:ring-[0.25vw] lg:border-[0.125vw] ring-[0.25vh] border-[0.125vh] text-nowrap border-black absolute px-1 rounded-full top-[10%] right-[30%]`} >{clusterCloudOf4[1]}</span>}
      {clusterCloudOf4[2] && <span  className = {`poppins-medium text-[0.75vw] ${colors[row]} text-black max-md:text-[1.5vw] lg:ring-[0.25vw] lg:border-[0.125vw] ring-[0.25vh] border-[0.125vh] text-nowrap border-black absolute px-1 rounded-full bottom-[32%] left-[30%]`} >{clusterCloudOf4[2]}</span>}
      {clusterCloudOf4[3] &&  <span  className = {`poppins-medium text-[0.75vw] ${colors[row]} text-black max-md:text-[1.5vw] lg:ring-[0.25vw] lg:border-[0.125vw] ring-[0.25vh] border-[0.125vh] text-nowrap border-black absolute px-1 rounded-full right-[5%] bottom-[10%]`} >{clusterCloudOf4[3]}</span>}
    </div>
  );
}
