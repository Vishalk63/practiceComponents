import { Button } from '@/components/ui/button'
import { motion,AnimatePresence } from "motion/react"
import React, { useState } from 'react'

function MyCustomPopup() {
    const [myPopup,setMyPopup]=useState(false)
  return (
    <div >MyCustomPopup
        <Button onClick={()=>setMyPopup(!myPopup)}>{myPopup?'Close':'Open'} my Custom Popup</Button>
        <AnimatePresence>
        {
            myPopup?<motion.div className='w-full h-[50%] flex justify-center items-center fixed inset-0 bg-indigo-500 p-5 rounded-xl'
            initial={{scale:0,opacity:1,y:-50}}
            animate={{scale:1,opacity:1 ,y:0}}
            exit={{scale:0,opacity:0}}
            transition={{duration:0.5}}
            >
                this is popup
                <Button onClick={()=>setMyPopup(false)}>Close</Button>
            </motion.div>:null
        }
        </AnimatePresence>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem asperiores eos blanditiis laboriosam, quia aperiam quod mollitia! Cumque qui voluptate, dolor odit laboriosam amet consequatur voluptatem sapiente expedita minima dolorum.</div>
    </div>
  )
}

export default MyCustomPopup