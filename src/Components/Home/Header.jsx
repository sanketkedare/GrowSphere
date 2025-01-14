import React from 'react'
import { motion} from "framer-motion";
import { TbCube3dSphere } from "react-icons/tb";

const Header = () => {
  return (
    <div className="lg:w-[90%]  pl-5 lg:m-auto lg:pt-10 pt-6 flex gap-2 items-center">
    <motion.div
      className="lg:text-[70px] text-[60px] shadow-md rounded-full p-1 text-[#e2bf65]"
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      <TbCube3dSphere />
    </motion.div>
    <div>
      <h1 className="lg:text-4xl text-xl font-semibold">
        Grow<span className="text-[#e2bf65]">Sphere</span>
      </h1>
      <span className="italic text-[#d1c4a9] lg:text-inherit text-sm ">
        A global sphere for growth and innovation
      </span>
    </div>
  </div>
  )
}

export default Header
