import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <aside className="items-center grid-flow-col">
     
    <p>Copyright © 2024 - Hussnain Ahmad</p>
  </aside> 
  <nav className="text-2xl grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a className='' target='_blank' href='https://linkedin.com/in/Hussnain-Ahmad/'>
    <FaLinkedin />
    </a>
    <a target='_blank' href='https://github.com/HussnainAhmad1606/'>
    <RxGithubLogo/>
    </a>
    <a target='_blank' href='https://twitter.com/PsychoTheCoder/'>
    <FaXTwitter/>
    </a>
    <a target='_blank' href='https://youtube.com/@DrThePsycho'>
    <FaYoutube/>
    </a>
  </nav>
</footer>
  )
}

export default Footer