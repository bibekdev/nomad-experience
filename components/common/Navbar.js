import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { asPath } = useRouter()
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between'>
        <h1 className='brand font-bold text-[34px] leading-[45px]'>
          The Nomad Experience
        </h1>
        <nav className='-mr-[30px]'>
          <ul className='flex gap-x-10 text-base'>
            {links.map(link => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${asPath === link.href ? 'font-semibold' : ''}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Guides', href: '/guides' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]
