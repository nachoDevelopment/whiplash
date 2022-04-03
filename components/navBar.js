import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from 'react'

export default function Navbar() {
  function toggleDarkMode(e) {
    document.querySelector('body').classList.toggle('dark')
  }
  return (
    <nav>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='flex'>
          <div className='flex items-center flex-1 justify-center'>
            <Link href='/'>
              <a className='flex items-center py-4 px-3 mr-auto'>
                <Image
                  src='/whiplash.png'
                  alt='Whiplash Logo'
                  width={39}
                  height={38}
                />
              </a>
            </Link>
          </div>
          <div className='flex items-center flex-1 justify-center'>
            <Link href='/'>
              <a className='py-4 px-3 font-primary tracking-widest text-xs text-primary-base hover:underline'>
                Shop
              </a>
            </Link>
            <Link href='/'>
              <a className='py-4 px-3 font-primary tracking-widest hover:underline text-xs text-primary-base'>
                About
              </a>
            </Link>
          </div>
          <div className='flex items-center flex-1 justify-center z-10'>
            <Link href='/'>
              <a className='py-4 px-3 ml-auto font-primary tracking-widest text-xs hover:underline text-primary-base'>
                Cart
              </a>
            </Link>
            <Link href='/'>
              <a className='py-4 px-3 font-primary tracking-widest hover:underline text-xs text-primary-base'>
                Get in touch
              </a>
            </Link>
          </div>
          {/* mobile button goes here */}
          <div className='md:hidden flex items-center'>
            <button className='mobile-menu-button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu goes here */}
      <div className='mobile-menu bg-primary-base absolute h-screen w-screen transition duration-500 ease-in-out hidden md:hidden md:opacity-0'>
        <Link href='/'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            Home
          </a>
        </Link>
        <Link href='/'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            Gallery
          </a>
        </Link>
        <Link href='/'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            Services
          </a>
        </Link>
        <Link href='/'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            About
          </a>
        </Link>
        <Link href='/'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            Contact
          </a>
        </Link>
      </div>
    </nav>
  )
}
