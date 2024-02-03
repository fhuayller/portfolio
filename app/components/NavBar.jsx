'use client';

import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs';

const NavBar = () => {
    return (
    <main className='px-10'>
        <section>
            <nav className='py-10 mb-12'>
                <ul className='flex items-center'>
                    <li className='cursor-pointer'>
                        <BsFillMoonStarsFill/>
                    </li>
                    <li className='bg-gradient-to-r from-cyan-500 to-teal-500 px-3 py-2 rounded-md ml-5'>
                        <a href="#" className='text-white'>Curriculum</a>
                    </li>
                </ul>
            </nav>
        </section>
    </main>
      
    );
  }
  
  export default NavBar;