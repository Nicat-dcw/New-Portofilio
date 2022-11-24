import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'
import Typewriter from 'typewriter-effect';
export default function Hero() {

const [yazi, setYazi] = useState("Together")
    const [renk, setRenk ] = useState("from-cyan-400 to-blue-600")
    setInterval(() => {
        const activities = ["Best", "Great", "Important", "Better"]
        const renks = ["from-amber-700 to-amber-500", "from-red-900 to-rose-600", "from-cyan-400 to-blue-600", "from-green-400 to-lime-600"]
let activity = activities[Math.floor(Math.random() * activities.length)];
let renkss = renks[Math.floor(Math.random() * renks.length)];

        setRenk(renkss)
        setYazi(activity)
    },14000)
    return (
        
    <>
<link href="https://cdn.jsdelivr.net/npm/daisyui@2.41.0/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>

            <div className="bg-gradient-to-r from-blue-900 to-black rounded-md">
<div className="">

                <center>
                    {/*                
<img class="p-1 w-32  h-32 pb-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://images-ext-1.discordapp.net/external/zIGE98fWJHmqiQ1cR2-gJaty3i5jDqM4ezuplLvOBEM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/852853360612605952/a_d1fdb50247959756c49c6e85f12add43.gif" alt="Bordered avatar"/>
*/}
<h1 className="text-5xl font-bold text-white">I'm <p className="font-extrabold text-transparent text-5xl  bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 "></p> <Typewriter
  options={{
    strings: ['Sportsman', 'Student', 'Developer', 'Cheeini', 'Frontend Developer', 'CEO'],
    autoStart: true,
      wrapperClassName:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600",
       cursorClassName:"bg-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600",
   
    loop: true,
  }}
/> </h1>
      <br/>
                    { /*<button className="w-64 btn btn-primary"> Login </button> */ }
  </center>
                </div>
            </div>
        <br/>
          <br/>
            </>    
       
        
    )
}