import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from 'react'

export default function Navbar() {
  const [isExpanded, toggleExpansion] = useState(false)
  const [menuActive, setMenuState] = useState(false)

  function expand() {
    toggleExpansion(!isExpanded)
  }

  function isActive() {
    setMenuState(!menuActive)
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
          <div className='hidden sm:flex items-center flex-1 justify-center'>
            <Link href='/'>
              <a className='py-4 px-3 font-primary tracking-widest text-xs text-primary-base hover:underline'>
                Shop
              </a>
            </Link>
            <Link href='/about'>
              <a className='py-4 px-3 font-primary tracking-widest hover:underline text-xs text-primary-base'>
                About
              </a>
            </Link>
          </div>
          <div className='hidden sm:flex items-center flex-1 justify-center z-10'>
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
          <div className='sm:hidden flex items-center z-10'>
            <button
              className='mobile-menu-button'
              aria-label='Menu'
              aria-controls='navigation'
              onClick={() => {
                expand()
                isActive()
              }}>
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
      <div
        className={`mobile-menu bg-primary-background flex-col items-center absolute h-full w-screen transition duration-500 ease-in-out ${
          isExpanded ? 'flex' : 'hidden'
        } sm:hidden sm:opacity-0 z-10`}>
        <Link href='/'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            Home
          </a>
        </Link>
        <Link href='/shop'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            Shop
          </a>
        </Link>
        <Link href='/about'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            About
          </a>
        </Link>
        <Link href='/cart'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            Cart
          </a>
        </Link>
        <Link href='/contact'>
          <a className='block py-4 px-4 text-sm font-italiana tracking-widest hover:underline'>
            Get in touch
          </a>
        </Link>
      </div>
    </nav>
  )
}
