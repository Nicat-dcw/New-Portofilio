//import 'flowbite';
import { SiDiscord } from 'react-icons/si'
import { useState, useEffect } from 'react'
import { AiOutlinePlusCircle, AiOutlineDatabase, AiOutlineLogout } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'

export default function Navbar() {
const [menu, setMenu] = useState(false)
    function openMenu(){
        setMenu(true)
    }
    function github(){
        
    }
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/daisyui@2.41.0/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>


            <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css" />
            <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>

<nav class="bg-gradient-to-r from-blue-900 to-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center">
        <span class="pl-2 pt-2 self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white md:pb-6">nicat-dcw<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">.me</span></span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-right pl-52 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-black-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
        {/* <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-end pl-72 ml-3 pb-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-black-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
        {/* <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  *
    <HiMenuAlt3 className="text-2xl"/>
    </button>
   
  
  */}
    <HiMenuAlt3 className="text-2xl"/>
    </button>
    <div class="hidden w-204 md:w-full md:pl-8 md:justify-center md:block md:w-auto" id="navbar-default">
        
             
      <ul class="flex flex-col p-2 mt-4 border border-indigo-700 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-black">
          <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/projects" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
        </li>
        <li>
          <a href="https://discord.gg/botscase" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Servers</a>
        </li>
        <li>
          <a href="https://botscase.com" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">BotsCase</a>
        </li>
        <li>
          <a href="https://github.com/Nicat-dcw" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Github</a>
        </li>
            <li className="justify-end md:w-full pb-8">
       </li>
     
          {/* <li className="justify-end h-8 w-8 pb-8">
              </li>*/}
      </ul>
     
    </div>
             <div className="pb-2"> </div>
  <div className="dropdown dropdown-end avatar pb-2">
    <div className="w-12">
        
        </div>
  </div>
  
  </div>
</nav>


        </>
    )
}