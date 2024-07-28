import Image from 'next/image'
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { FaHashnode } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
import "@/css/my-links.css";
export default function Home() {
  return (
    <div className='flex justify-center items-center flex-col' style={{
      minHeight: "100vh"
    }}>
      <p className='text-4xl font-bold'>Links</p>
      <div id='icons' className='my-10 flex justify-around items-center'>
      <a target='_blank' href='https://linkedin.com/in/Hussnain-Ahmad/'>
    <FaLinkedin className='text-5xl'/>
    </a>
    <a target='_blank' href='https://github.com/HussnainAhmad1606/'>
    <RxGithubLogo className='text-5xl'/>
    </a>
    <a target='_blank' href='https://twitter.com/PsychoTheCoder/'>
    <FaXTwitter className='text-5xl'/>
    </a>
    <a target='_blank' href='https://youtube.com/@DrThePsycho'>
    <FaYoutube className='text-5xl'/>
    </a>
    <a target='_blank' href='https://psychocoder.hashnode.dev/'>
    <FaHashnode className='text-5xl'/>
    </a>
    <a target='_blank' href='https://unfilteredpsycho.substack.com/'>
    <BsSubstack className='text-5xl'/>
    </a>
      </div>
  </div>
  )
}
