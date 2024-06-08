import React from 'react'

function Home() 
{
    return (
        <>
            <div>
                <nav className="w-1/2 mx-auto flex justify-center ">
                    <ul className=" bg-zinc-800 flex gap-x-10 px-3 mx-auto rounded-md fixed  bottom-3 py-2 z-1 opacity-80">
                        <a href="#home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsYUkLlFXgGXvrlyivL7-zpvV3EM4Ynz7Mg&s" alt="" width="30px" height="30px" className="rounded-full" /></a>
                        <a href="#about"><img src="https://i.ibb.co/c8c5mBP/ABOUT-ME.jpg" alt="" width="30px" height="30px" className="rounded-full" /></a>
     <a href="#skill"><img src="https://i.ibb.co/3r80qnx/skills.png" alt="" width="30px" height="30px" className="rounded-full" /></a>
    <a href="#qualification"><img src="https://i.ibb.co/981VJf5/degree-logo.jpg" alt="" width="30px" height="30px" className="rounded-full"/></a>
                        <a href="#projects"><img src="https://i.ibb.co/Rj8VBTt/projects.png" alt="" width="30px" height="30px" className="rounded-full" /> </a>
                    </ul>

                </nav>

                {/* <!-- INTRODUCTION --> */}
                <div className="flex  flex-col items-center mt-20" id="home">
                    <p className="text-white font-semibold mb-6">Hello I am</p>
                    <h1 className="text-5xl text-white font-bold mb-5">Amit Kumar</h1>
                    <p className="text-xl text-white">A Fronted End Student </p>
                </div>

                {/* <!-- DOWNLOAD AND CV --> */}

                <div className="flex justify-center gap-4 mt-11">

                        <a href="/Amit _Resume_813.pdf" target="blank" className='bg-blue-500 px-3 py-2 rounded-lg text-2xl text-white'>DownLoad CV</a>

                 
                    {/* <!-- <button className="bg-transparent text-blue-400 border-2 border-blue-400 px-4 rounded-md hover:bg-slate-50">Lets
            Talk</button> --> */}
                </div>
                {/* <!-- 
 photo and side bar --> */}
                <div className="flex justify-around mt-20">
                    {/* <div className="flex flex-col gap-5 mt-5 ">
                        <img src="/linkdein.png" alt="" width="30px" height="30px" className="rounded-full" />
                        <img src="/gitlogo.png" alt="" width="30px" height="30px" className="rounded-full" />
                    </div> */}
                    <div>
                        <img src='https://i.ibb.co/BsKqBgP/IMG-20230420-211734-369.jpg' alt="" width="200px" height="150px"
                            className="rounded-b-lg rounded-t-3xl rounded-l-2xl" />
                    </div>
                    {/* <div>
                        <button><img src="/scrooll logo.jpeg" alt="" width="60px" height="60px" className="rounded-full" /></button>
                    </div> */}
                </div>

                {/* <!-- about me head --> */}
                <div className="flex flex-col items-center mt-20" id="about">
                    <p className="text-gray-500">Get to Know</p>
                    <h1 className="text-blue-400 text-4xl font-semibold">About me</h1>
                </div>

                {/* <!-- about details --> */}

                <div className=" flex flex-col items-center  justify-center mt-7  gap-8 md:flex-row">
                    <div className=" flex items-center">
                        <img src="https://i.ibb.co/BsKqBgP/IMG-20230420-211734-369.jpg" alt="" width="200px" height="200px" className="rounded-full " />
                    </div>
                    <div className="w-5/6 px-10 py-20 text-white text-xl h-auto text-justify md:w-1/3">
                        <p>I am recent graduate from Bachleors in Science from Mathematics from Rakesh P.G. College Pilani(Rajsthan).
                            Being a Mathematics student i have a good skills to solve problems in a optimized ways.
                            Apart from problem solving skill  i have relent skills as  front End Developer to code.
                        </p>
                        {/* <!-- <button className="bg-blue-500 mt-4 px-4 py-2 rounded-md font-700  text-xl text-black  hover:bg-yellow-50"> Lets
                Talk</button> --> */}
                    </div>
                </div>

                {/* <!-- worked skils head --> */}
                <div className="" id="skill">
                    <h5 className="text-center text-gray-500">I have worked on these</h5>
                    <h2 className="text-center text-blue-500 text-3xl font-semibold mb-14">Skills</h2>
                    <div className="grid gap-5 grid-cols-1 items-center justify-items-center md:grid-cols-2">
                        <div className="w-4/5 h-full bg-slate-700 rounded-md hover:bg-transparent hover:border-2 hover:border-blue-400 md:w-3/4">
                            <h1 className="text-blue-400 mt-5 text-2xl font-semibold text-center">
                                Front End Development</h1>
                            <div className="grid grid-cols-2 gap-9 text-white font-semibold p-20 ">
                                <article>HTML</article>
                                <article>CSS</article>
                                <article>Javascript</article>
                                {/* <!-- <article>Tailwind</article>
                    <article>React JS</article>
                    <article>Next js</article> --> */}
                            </div>
                        </div>

                        {/* <!-- <div className="w-4/5 h-full bg-slate-700 rounded-md hover:bg-transparent hover:border-2 hover:border-blue-400 md:w-3/4">
                <h1 className="text-blue-400 mt-5 text-2xl font-semibold text-center">
                    Bank End Development</h1>
                <div className="grid grid-cols-2 gap-9 text-white font-semibold p-20 ">
                    <article>HTML</article>
                    <article>CSS</article>
                    <article>Javascript</article>
                    <article>Tailwind</article>
                    <article>React JS</article>
                    <article>Next js</article>
                </div>
            </div> --> */}
                    </div>


                </div>

                {/* <!-- qualification --> */}

                <div id="qualification" className="text-center mt-16 s">
                    <h5 className="text-gray-500 ">My Personal Journey</h5>
                    <h1 className="text-blue-500  text-2xl font-semibold">Qualifications</h1>
                    <div id="qulifiaction-container">
                        <div id="qulification-tabs" className="flex  w-3/4 mx-auto my-20 justify-around">
                            <button className="flex  justify-center items-center gap-5 text-white font-semibold text-xl active:text-blue-600">
                                <img src="/degree logo.jpg" alt="" width="30px" height="30px" className="rounded-full" />
                                <span>Education</span>
                            </button>

                            {/* <!-- <button className="flex  justify-center items-center gap-5 text-white font-semibold text-xl active:text-blue-600">
                    <img src="/work logo.png" alt="" width="30px" height="30px" className="rounded-full">
                    <span>Work</span>
                </button> --> */}
                        </div>
                        {/* <!-- EDUCATION --> */}
                        <div id="qulification-section">
                            <div id="education" className=" w-3/4 mx-auto h-auto gap-1 flex flex-col">
                                <div className=" text-left w-2/5  ml-20 flex justify-around">
                                    <div>
                                        <h2 className="text-white font-semibold text-xl">Bachlors of Science-</h2>
                                        <h2 className="text-white font-semibold text-xl">Rakesh P.G.College</h2>
                                        <h3 className=" text-gray-600 font-semibold">2020-2024</h3>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        <span className="inline-block w-3 h-3 bg-blue-600 rounded-md"></span>
                                        <span className="block w-1 h-full bg-blue-600 "> </span>
                                        <span className="inline-block w-3 h-3 bg-blue-600 rounded-md"></span>


                                    </div>
                                </div>

                                <div className=" w-1/2 mx-auto text-right">

                                    <div>
                                        <h2 className="text-white font-semibold text-xl">Senior Secondary(Maths)</h2>
                                        <h2 className="text-white font-semibold text-xl">Jeevani International School</h2>
                                        <h3 className=" text-gray-600 font-semibold">2017-2018</h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div id="work"></div> --> */}
                        </div>
                    </div>

                </div>


                {/* <!-- Projects --> */}

                <div className="mt-44 h-auto" id="projects">
                    <div className="text-center">
                        <h4 className="text-gray-400 font-normal">My Recent Works</h4>
                        <h1 className="text-blue-500 text-3xl font-bold">Projects</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="w-4/5 mx-auto my-10 bg-blue-900 p-16 rounded-lg hover:bg-transparent hover:border-2 border-blue-400">
                            <h1 className="text-center text-white font-bold text-2xl mb-8  ">My PortFolio</h1>
                            <p className="text-white text-justify font-medium">
                                This is my profile Website.I have create this website using HTML,CSS and Tailwind and fundamental of Reacts.
                            </p>
                        </div>

                        <div className="w-4/5 flex flex-col  gap-y-10 mx-auto my-10 bg-blue-900 p-16 rounded-lg hover:bg-transparent hover:border-2 border-blue-400 ">
                            <h1 className="text-center text-white font-bold text-2xl  ">Weather App</h1>
                            <p className="text-white text-justify font-medium">
                                In this I use HTML,CSS and Javascript.In this I use skills of using ApI Handling
                            </p>
                            <a href="https://weathe-rapp.netlify.app"  target='__blank' className="text-2xl text-white bg-blue-500 px-4  py-2 rounded-md">View Site</a>

                        </div>

                        <div className="w-4/5 flex flex-col  gap-y-10 mx-auto my-10 bg-blue-900 p-16 rounded-lg hover:bg-transparent hover:border-2 border-blue-400 ">
                            <h1 className="text-center text-white font-bold text-2xl  ">Ecommerce Store</h1>
                            <p className="text-white text-justify font-medium">
                               This Project is made by ReactJs . In this project I use basics concept of React-Router and Redux Toolkit and etc.
                            </p>
                            <a href="https://apnaishop.netlify.app" target='__blank' className="text-2xl text-white bg-blue-500 px-4  py-2 rounded-md">View Site</a>

                        </div>


                        {/* <div className="w-4/5  flex flex-col  gap-y-10 mx-auto my-10 bg-blue-900 p-16 rounded-lg hover:bg-transparent hover:border-2 border-blue-400">
                            <h1 className="text-center text-white font-bold text-2xl mb-8 ">NetflixClone</h1>
                            <p className="text-white text-justify font-medium">In this i use and learn about basics css and javacsript we which hold.</p>
                            <a href="https://netflixott.netlify.app" target='__blank' className="text-2xl text-white bg-blue-500 px-4  py-2 rounded-md">View Site</a>
                        </div> */}

                    </div>
                </div>

                {/* <!-- get in TOUCH --> */}

                <div className="text-center mt-12 flex justify-center flex-col contact" id="contact">
                    <div>
                        <h4 className="text-grey-400">Get in Touch</h4>
                        <h2 className="text-blue-400 font-bold text-2xl">Contact me</h2>

                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-y-6">
                        <div className="bg-blue-400 w-3/4 md:w-3/5 m-auto flex flex-col items-center p-10 rounded-md hover:bg-transparent hover:border-2 hover:border-blue-400">
                            <img src="https://i.ibb.co/59MTMQg/emial.png" alt="" width="30px" height="30px" className="rounded-full" />
                            <h2 className="text-white text-xl font-semibold">Email</h2>
                            <h2 className="text-white font-bold text-xs md:text-2xl">amitkverma551@gmail.com</h2>
                        </div>

                        {/* <!-- <div className="bg-blue-400 w-3/4 md:w-3/5 m-auto flex flex-col items-center p-10  rounded-md hover:bg-transparent hover:border-2 hover:border-blue-400">
                <img src="/WHAUSIP.png" alt="" width="30px" height="30px" className="rounded-full">
                <h2 className="text-white text-xl font-semibold">WhatsUp</h2>
                <h2 className="text-white font-bold text-xs  md:text-2xl">amitkverma551@gmail.com</h2>
            </div> --> */}

                        <div className="bg-blue-400 w-3/4  md:w-3/5 m-auto flex flex-col items-center p-10 rounded-md hover:bg-transparent hover:border-2 hover:border-blue-400">
                            <img src="https://i.ibb.co/64ySHMY/call.webp" alt="" width="30px" height="30px" className="rounded-full" />
                            <h2 className="text-white text-xl font-semibold">Call</h2>
                            <h2 className="text-white font-bold text-xs md:text-2xl">9461240856</h2>
                        </div>



                    </div>
                </div>

                {/* <!-- footer --> */}


                <footer className="bg-indigo-500 rounded-md mt-10 flex flex-col justify-center items-center gap-y-10 ">
                    <h1 className=" hover:text-white text-4xl font-bold">Amit Kumar</h1>

                    <div className="grid grid-cols-1  w-3/4 mx-auto gap-2  my-3 md:grid-cols-6 md:gap-4" >
                        <a href="#" className="hover:text-white text-xl font-sembold" >Home</a>
                        <a href="#about" className="hover:text-white text-xl font-sembold">About</a>
                        <a href="#skill" className="hover:text-white text-xl font-sembold">Skills</a>
                        <a href="#qualification" className="hover:text-white text-xl font-sembold">Qualifications</a>
                        <a href="#projects" className="hover:text-white text-xl font-sembold">Projects</a>
                        <a href="#contact" className="hover:text-white text-xl font-sembold">Contact</a>


                    </div>

                    {/* <div className="grid gap-5 grid-cols-3 w-1/4 mx-auto my-2 ">
                        <img src="/linkdein.png" alt="" width="30px" height="30px" className="rounded-full" />
                        <img src="/gitlogo.png" alt="" width="30px" height="30px" className="rounded-full" />
                        <img src="/stack overflow.png" alt="" width="30px" height="30px" className="rounded-full" />

                    </div> */}
                </footer>

            </div>

        </>
      )
        }
    


export default Home
