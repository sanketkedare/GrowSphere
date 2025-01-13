import React from 'react'
import { motion} from "framer-motion";
import { TbCube3dSphere } from "react-icons/tb";

const DiscussionHeader = () => {
    return (
      <div className="sticky z-10 m-auto p-5 flex gap-2 items-center">
      <motion.div
        className="text-[50px] shadow-md rounded-full p-1 text-[#e2bf65]"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <TbCube3dSphere />
      </motion.div>
      <div>
        <h1 className="text-xl font-semibold">
          Grow<span className="text-[#e2bf65]">Sphere</span>
        </h1>
        <span className="italic text-[#d1c4a9] text-sm">
          A global sphere for growth and innovation
        </span>
      </div>
    </div>
    )
  }
export default DiscussionHeader



