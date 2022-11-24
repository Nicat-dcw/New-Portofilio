import link from 'next/link'
export default function AboutMe(){
    return (
          
        <>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,500&family=Patrick+Hand&display=swap" rel="stylesheet"/>
<br/>
            <h1 className="text-5xl pl-2 text-center text-gray-400" style={{fontFamily:'Patrick Hand'}}> About Me </h1>
       <center>     <hr class="my-4  w-48 h-1 pr-4 pl-2 left-0 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"/></center>
     <p style={{fontFamily:'Open Sans'}} className="text-white text-md pl-4">Hello There!. My Name is Nicat, 16 y/o Middle School Student and Frontend Developer. Im Currently Living at Khirdalan/Azerbaijan before Baku/Azerbaijan. I am currently learning language is <span className="text-cyan-700">TypeScript</span>.</p>
        </>
    )
}