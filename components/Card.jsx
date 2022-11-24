import { useEffect, useState } from "react"
import { BsSpotify, BsGithub } from "react-icons/bs"
import { SiTwitter, SiInstagram, SiYoutube, SiVisualstudiocode, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiExpress, SiBootstrap, SiCodefactor, SiVercel } from "react-icons/si"
import { IoFlower } from "react-icons/io5"
import { ImStarFull } from "react-icons/im"
import { HiOutlineAcademicCap, HiAcademicCap, HiLink } from "react-icons/hi"
//import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import moment from "moment"
import configured from '../config/data.json'
import "moment-duration-format"
import useSWR from "swr"
export default function Card(){
    const [user, setUser] = useState({})
    const [averageColor, setAverageColor] = useState(null)
    const [repos, setRepos] = useState(undefined)
    const fetchData = (url) => fetch(url).then(r => r.json())
   /* const {data, error} = useSWR('https://api.github.com/users/' + UserData.github + '/repos',fetchData,{refreshInterval:5000})

    useEffect(() => {

        setRepos(data)

    }, [data])*/

    useEffect(() => {

        const websocket = new WebSocket("wss://api.lanyard.rest/socket")
        
        websocket.onmessage = data => {
            var message = JSON.parse(data.data)
            if (message.op) { 
                if (message.op == 1) {
                    setInterval(() => {
                        websocket.send(JSON.stringify({ op: 3 }))
                    }, message.d.heartbeat_interval)
                    websocket.send(JSON.stringify({ op: 2,  d: {subscribe_to_ids: [configured.userId]} }))
                }
            }
            if (message.t && (message.t == "INIT_STATE" || message.t == "PRESENCE_UPDATE")) {
                setUser((message.t == "PRESENCE_UPDATE") ? message.d : message.d[configured.userId])
            }
        }

    }, [])
    return (
        <>
            <div className="bg-gradient-to-r from-blue-900 to-black">
                  <center>
<div className="bg-green-500 sm:w-64 h-32 md:w-64 rounded-lg text-white">
 
<div className="pt-2"><BsSpotify size={20}/> <span className="top-0 "></span></div><p className="text-center pt-4 font-bold">{(user.listening_to_spotify == true) ? `${user.spotify.song} Isimli Şarkı ${user.spotify.artist} Tarafından.` : ((user.listening_to_spotify == false) ? "I am not listening anything right now." : "Loading...")}</p>
   
</div>

            </center>
                
                {/*
<center>
    
         <div className=" skew-y-6 bg-gray-700 rounded-lg w-64 h-32">
<div className="">

    <div className="pt-6 pr-44 ">
       
        <img src="https://images-ext-2.discordapp.net/external/eceYMomna7kmp2j8e30TNAbpsPNkrP52i4JZdwlvbXY/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/682607343707488388/97c664f49b0258a86e23a9e5ecedb857.webp" className="rounded-md border-2 border-white  w-12 h-12"/>
    
      </div>
    <br/>
    <div className="-top-0 pt-20 pl-2 flex reliative items-center">
   <h1 className="absolute text-md  text-xs justify-center    text-white pl-16 pb-64">`🍂 Only Cheeini<span className="text-gray-400">#9999</span></h1>  
<hr/>
    </div>
           
</div>
                                  </div>
    </center>
                */}
        <br/>

    {/*  
<div className=" md:skew-y-6 bg-[#111111] w-64 md:w-96 h-72 md:h-74 rounded-lg relative py-5 px-4 overflow-hidden mt-8" align="left">
                    <div className="flex items-center gap-3">
                        <img className="w-24 h-24 rounded-2xl" src="https://images-ext-1.discordapp.net/external/zIGE98fWJHmqiQ1cR2-gJaty3i5jDqM4ezuplLvOBEM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/852853360612605952/a_d1fdb50247959756c49c6e85f12add43.gif"/>
                        <div>
                            <h1 className="font-sans text-gray-400 font-semibold text-md md:text-xl">` 🍂 Only Cheeini</h1>
                            <h2 className="font-sans text-gray-200 text-base">Frontend Developer.</h2>
                            <h3 className="font-sans text-white text-sm flex items-center gap-2 mt-2">
                              
                            </h3>
                        </div>
                    </div>
                    <br/>
                    <div className="w-full flex justify-between items-center">
                        <h1 className="font-sans text-white font-bold text-sm">LISTENING TO SPOTIFY</h1>
                        <BsSpotify size="25px" className="text-green-600"></BsSpotify>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                        <img className="w-24 h-24 rounded-lg" src={(user.listening_to_spotify == true) ? user.spotify.album_art_url : "https://images-ext-1.discordapp.net/external/zIGE98fWJHmqiQ1cR2-gJaty3i5jDqM4ezuplLvOBEM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/852853360612605952/a_d1fdb50247959756c49c6e85f12add43.gif"}/>
                        <div>
                            <h1 className="font-semibold text-white text-base">{(user.listening_to_spotify == true) ? `${user.spotify.song}` : ((user.listening_to_spotify == false) ? "Nothing." : "Loading...")}</h1>
                            <h2 className="text-gray-300 text-base text-sm">{(user.listening_to_spotify == true) ? `${user.spotify.artist}` : ((user.listening_to_spotify == false) ? "" : "Loading...")}</h2>
                       
                        </div>
                    </div>
                </div>
    
</center>*/}
                </div>
        </>
        
    )
}