import Link from 'next/link'
import { Red_Hat_Display } from '@next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['700'],
})

const Navbar = () => {
  return (
    <div className=' absolute left-[91px]  top-[41px] text-white w-full'>
      <div className='flex items-center justify-around'>
        <h1 className='brand font-bold text-[34px] leading-[45px]'>
          The Nomad Experience
        </h1>
        <nav>
          <ul className='flex gap-x-10 text-base'>
            <li>
              <Link href='/' className='font-semibold'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/'>About</Link>
            </li>
            <li>
              <Link href='/'>Services</Link>
            </li>
            <li>
              <Link href='/'>Guides</Link>
            </li>
            <li>
              <Link href='/'>Blogs</Link>
            </li>
            <li>
              <Link href='/'>Gallery</Link>
            </li>
            <li>
              <Link href='/'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
