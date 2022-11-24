import { SiReact, SiNextdotjs, SiTailwindcss, SiVercel, SiBootstrap, SiExpress, SiCss3, SiHtml5 } from 'react-icons/si'
import { IoFlower } from "react-icons/io5"
import { ImStarFull, ImNpm } from "react-icons/im"
import { BsSpotify, BsGithub } from "react-icons/bs"
import { HiOutlineAcademicCap, HiAcademicCap, HiLink } from "react-icons/hi"
export default function Languages(){
    return (
        <>
            <br/>
            <div className="flex items-center gap-4 bg-black">
            <div className="p-4 rounded-full bg-gray-400 hover:bg-purple-400 hover:border-purple-700 dark:bg-gray-50 border-2 border-solid border-gray-500 dark:border-gray-900 transition">
              
            </div>
            <h1 className="text-2xl text-white dark:text-white font-bold font-sans">Technologies I Use</h1>
        </div>
        <br/>
        <div className="block space-y-4 sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:space-y-0" data-aos="fade-up">
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold   cursor-pointer bg-cyan-700 rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <SiReact size="25px" color="#61DBFB"/>
                    <h1 className="font-sans text-gray-900 dark:text-white text-base">React</h1>
                </div>
            </div>
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold  cursor-pointer bg-cyan-700 rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <SiNextdotjs size="25px" color="BLACK"/>
                    <h1 className="font-sans text-gray-900 dark:text-white text-base">Next.js</h1>
                </div>
            </div>
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold  bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <SiTailwindcss size="25px" color="#36B7F0"/>
                    <h1 className="font-sans text-white dark:text-white text-base">TailwindCSS</h1>
                </div>
            </div>
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold  bg-gradient-to-r from-rose-800 to-red-900 cursor-pointer rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <SiHtml5 size="25px" color="#FF4B00"/>
                    <h1 className="font-sans text-white dark:text-white text-base">HTML</h1>
                </div>
            </div>
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold  bg-gradient-to-r from-sky-700 to-cyan-400 cursor-pointer rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <SiCss3 size="25px" color="#264DE4"/>
                    <h1 className="font-sans text-white dark:text-white text-base">CSS</h1>
                </div>
            </div>
              <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold  bg-gradient-to-r from-white to-red-500 cursor-pointer rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <ImNpm size="25px" color="#eb3434"/>
                    <h1 className="font-sans text-white dark:text-white text-base">NPM</h1>
                </div>
            </div>
          
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold  bg-gradient-to-r from-rose-400 to-red-400 cursor-pointer rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <SiExpress size="25px" color="BLACK"/>
                    <h1 className="font-sans text-white dark:text-white text-base">Express.js</h1>
                </div>
            </div>
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold  bg-gradient-to-r from-purple-500 to-purple-700 cursor-pointer rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <SiBootstrap size="25px" color="#8411F6"/>
                    <h1 className="font-sans text-white dark:text-white text-base">Bootstrap</h1>
                </div>
            </div>
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold  bg-gradient-to-r from-black to-gray-900 cursor-pointer rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <SiVercel size="25px" color="BLACK"/>
                    <h1 className="font-sans text-white dark:text-white text-base">Vercel</h1>
                </div>
            </div>
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold  bg-gradient-to-r from-black to-gray-900 cursor-pointer rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <BsGithub size="25px" color="BLACK"/>
                    <h1 className="font-sans text-white dark:text-white text-white">Github</h1>
                </div>
            </div>
            <div className="py-4 px-6 w-full sm:w-48 font-sans text-base font-bold bg-gradient-to-r from-amber-700 to-amber-500 cursor-pointer rounded-lg transition">
                <div className="flex justify-between items-center w-full h-full">
                    <IoFlower size="25px" color="YELLOW"/>
                    <h1 className="font-sans text-white dark:text-white text-base">Daisy UI</h1>
                </div>
            </div>
        </div>

        </>
    )
}