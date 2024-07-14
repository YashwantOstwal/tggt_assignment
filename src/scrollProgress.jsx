import { useScroll, useTransform,motion } from 'framer-motion'
import { forwardRef } from 'react'
import beam from './assets/beam.png'

 const ScrollYProgress = forwardRef(function({targetRef}) {
    const {scrollYProgress } = useScroll({
        target :targetRef,
        offset: ["start start","end end"]
    })
    const width = useTransform(scrollYProgress,[0,1],["0%","100%"])
    return (
      <>
        <motion.div className = 'fixed inset-x-0 h-[0.15rem] z-10 top-6'
          animate = {{y:['0px','0.5px','-0.5px','0px']}}
          transition = {{repeat:Infinity}}
        >
            <motion.div className = 'relative h-full bg-[#E9FFFF] outline-2 outline outline-offset-0 outline-[#33C8FE] rounded-r-full'
              style = {{width}}>
                <img className = 'absolute -top-[1.45rem] -right-1 max-w-32 min-w-32' src = {beam} alt=""/>
            </motion.div>
        </motion.div>
      </>
    )
})

export default ScrollYProgress;