import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <nav className='bg-black text-white px-5'>
      <div className='flex justify-center flex-col items-center max-w-[1126px] mx-auto border-b-[1px] border-white/10 pb-5'>
        <div>
          <h1 className='font-secondary text-5xl -mb-2'>
            Whiplash
            <span className='text-yellow-400 text-[105px] leading-normal'>
              .
            </span>
          </h1>
          <h2 className='font-tertiary text-sm tracking-wide uppercase text-white -mt-11'>
            A Commercial & Creative House
          </h2>
        </div>
        <div className='flex flex-row items-center my-4'>
          <Link href='/'>
            <a className='flex items-center justify-center mx-2 bg-white/10 rounded-full w-9 h-9 '>
              <Image
                src='/LinkedIn.svg'
                alt='LinkedIn Logo'
                width={23}
                height={23}
              />
            </a>
          </Link>
          <Link href='/'>
            <a className='flex items-center justify-center mx-2 bg-white/10 rounded-full w-9 h-9'>
              <Image
                src='/facebook.svg'
                alt='Facebook Logo'
                width={23}
                height={23}
              />
            </a>
          </Link>
          <Link href='/'>
            <a className='flex items-center justify-center mx-2 bg-white/10 rounded-full w-9 h-9'>
              <Image
                src='/Twitter.svg'
                alt='Twitter Logo'
                width={23}
                height={23}
              />
            </a>
          </Link>
        </div>
        <div className='flex flex-col items-center font-light tracking-widest font-tertiary text-xs text-center text-gray-400'>
          <p className='uppercase mb-2'>
            Commercial Antidotes and Creative Elixirs For Online Brands
          </p>
          <p>
            thatgavemewhiplash Ltd is a registered company in England & Wales,
            company number: 123456
          </p>
        </div>
      </div>
      <div className='flex justify-between flex-row items-center max-w-[1126px] mx-auto pb-5 mt-4 flex-wrap'>
        <div className='flex flex-row items-center font-light tracking-widest font-tertiary text-xs text-gray-400'>
          <Link href='/'>Terms & Conditions</Link>
          <div className='h-[4px] w-[4px] bg-white rounded-full mx-3'></div>
          <Link href='/'>Privacy Policy</Link>
        </div>
        <p className='font-light tracking-widest font-tertiary text-xs text-gray-400'>
          © 2022 Whiplash®
        </p>
      </div>
    </nav>
  )
}
