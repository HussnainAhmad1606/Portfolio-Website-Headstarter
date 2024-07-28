import React from 'react'
import {  FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import "@/css/skillset.css";
function Skillset() {
  return (
    <div id='skillSet' className='flex text-4xl'>
        <FaHtml5/>
        <IoLogoCss3/>
        <IoLogoJavascript/>
        <FaReact/>
        <SiMongodb/>
        <SiNextdotjs/>
        <FaPython/>
        <SiDjango/>
    </div>
  )
}

export default Skillset