import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import AboutMe from '../components/AboutMe'
import All from '../components/All'
import Languages from '../components/Languages'
//import '../styles/globals.css'
const Home: NextPage = () => {
  return (
      <>
    <div className="bg-gradient-to-r from-blue-900 to-black">
      <Head>
        <title>Only Cheeini | Hello World!</title>
             <meta name="description" content="Full Stack Developer" />
          <meta name="og:site_name" content="Only Cheeini"/>
          <meta name="og:color" content="blue"/>
          <meta property="og:image" content="https://images-ext-1.discordapp.net/external/zIGE98fWJHmqiQ1cR2-gJaty3i5jDqM4ezuplLvOBEM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/852853360612605952/a_d1fdb50247959756c49c6e85f12add43.gif"/>
     
        <link rel="icon" href="https://images-ext-1.discordapp.net/external/zIGE98fWJHmqiQ1cR2-gJaty3i5jDqM4ezuplLvOBEM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/852853360612605952/a_d1fdb50247959756c49c6e85f12add43.gif" />
      </Head>
          <Navbar/>
<Hero/>
<Card/>
<AboutMe/>
        <br/>


    <br/>
</div>

      </>
  )
}

export default Home