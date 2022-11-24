import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

//const Projects: NextPage = () => {
export default function Projects(){
  return (
      <>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,500&family=Patrick+Hand&display=swap" rel="stylesheet"/>

          <Head>
          <title>Only Cheeini | Projects</title>
          </Head>
          <div className="bg-gradient-to-r from-blue-900 to-black">
<Navbar/>
              <div className="bg-gradient-to-r from-blue-900 to-black">
<div className="text-2xl text-center text-white">
<h1 style={{fontFamily:'Open Sans'}}> My Projects</h1>
     <center>     <hr class="my-4  w-48 h-1 pr-4 pl-2 left-0 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"/></center>
    <br/>
    <center>
<a href="/" data-theme="night" class="sm:w-64 md:w-full block max-w-sm p-6 bg-black border border-blue-400 rounded-lg shadow-md hover:bg-gray-900 dark:hover:bg-gray-900">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">BotsCase</h5>
    <p class="font-normal text-gray-400 dark:text-white">Find the best discord bot for your server in BOTS CASE and upgrade your discord experience.</p>
<br/>
    <a className="btn w-full" href="https://botscase.com" data-theme="night">Website</a>
</a>
</center>
    <br/>
     <center>
<a href="/" data-theme="night" class="sm:w-64 md:w-full block max-w-sm p-6 bg-black border border-cyan-500 rounded-lg shadow-md hover:bg-gray-900 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Oceanlist</h5>
    <p class="font-normal text-gray-400 dark:text-white">The Best Advanced Discord Bot List Website. We help Users to Grow Up their bots fastly.</p>
<br/>
    <a className="btn w-full" href="/" data-theme="night">Website</a>
</a>
</center>
   
    </div>


                  </div>
              <br/>
                <br/>
              <br/>
              <br/>
            
              </div>
      </>
      )
}