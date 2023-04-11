import React from "react"
import './App.css';


function Navbar(){


    function handleClick(){


        const btn = document.getElementById('menu-btn')
        const nav = document.getElementById('menu')

        btn.classList.toggle('open')
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
    }
    

    return(
    
    <div>
    <nav className='relative mx-auto'> 
        <div className='flex items-center justify-between shadow-xl  py-4 px-6'>
            <div className='pt-2'>
                <img src="img/logo.svg" alt=''></img>
            </div>
            <div className='hidden md:flex space-x-8'> 
                <a href='#' className='hover:scale-125 transition ease-out hover:font-bold'> Pricing</a>
                <a href='#' className='hover:scale-125 transition ease-out hover:font-bold' > Product</a>
                <a href='#' className='hover:scale-125 transition ease-out hover:font-bold' > About Us</a>
                <a href='#' className='hover:scale-125 transition ease-out hover:font-bold' > Careers</a>
                <a href='#' className='hover:scale-125 transition ease-out hover:font-bold' > Community</a>
            </div>
            <a href="#" className="hidden md:block p-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight">Get Started</a>

            {/* Hamburger icon*/}

            <button id="menu-btn" className="block hamburger md:hidden focus:outline-none" onClick={handleClick}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
            
        </div>

        <div className="md:hidden">
            <div id="menu"  className= " absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">

                    <a href="#">Pricing</a>
                    <a href="#">Product</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Community</a>
            </div>
        </div>
        
    </nav>
    </div>

    )
}

export default Navbar;