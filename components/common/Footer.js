import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#101010] h-[408px] w-full text-white'>
      <div className='flex px-[95px] pt-[61px] mb-[83px]'>
        <div className='w-[344px] mr-14'>
          <h2 className='font-bold text-3xl brand mb-4 text-primary'>
            The Nomad Experience
          </h2>
          <p className='text-[12px] mb-4'>
            What does "community" really look like? What does it mean to value
            relationships over things? What happens when mobility is considered
            a resource for stability?
          </p>
          <a href='' className='text-[10px] text-primary'>
            VIEW MORE
          </a>
        </div>
        <div className='mr-[65px]'>
          <h4 className='text-xl font-bold text-primary mb-[18px]'>Explore</h4>
          <nav>
            <ul className='flex gap-y-4 flex-col text-sm'>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>Services</a>
              </li>
              <li>
                <a href=''>Guides</a>
              </li>
              <li>
                <a href=''>Blog</a>
              </li>
              <li>
                <a href=''>Gallery</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='w-[350px] mr-[55px]'>
          <h4 className='text-xl font-bold text-primary mb-[18px]'>Gallery</h4>
          <div className='grid grid-cols-3 grid-rows-2 gap-2.5'>
            {galleries.map(gallery => (
              <div
                key={gallery.id}
                className='w-[110px] h-[70px] rounded-md overflow-hidden'>
                <Image
                  src={`/images/${gallery.image}`}
                  width={110}
                  height={70}
                  alt='photo'
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='mr-[65px]'>
          <h4 className='text-xl font-bold text-primary mb-[18px]'>
            Social Media
          </h4>
          <nav>
            <ul className='flex gap-y-4 flex-col text-sm'>
              <li>
                <a href=''>Facebook</a>
              </li>
              <li>
                <a href=''>Instagram</a>
              </li>
              <li>
                <a href=''>Twitter</a>
              </li>
              <li>
                <a href=''>Google Plus</a>
              </li>
              <li>
                <a href=''>Pinterest</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='mr-[65px]'>
          <h4 className='text-xl font-bold text-primary mb-[18px]'>
            Information
          </h4>
          <nav>
            <ul className='flex gap-y-4 flex-col text-sm'>
              <li>
                <a href=''>About us</a>
              </li>
              <li>
                <a href=''>Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='flex w-full items-center'>
        <div className='h-[1px] bg-[#e4e4e4] w-[450px]'></div>
        <div className='w-[620px] mx-6 text-sm text-center'>
          Terms & Conditions | Privacy Policy 2022 | The Nomad Experience | ALL
          RIGHTS RESERVED
        </div>
        <div className='h-[1px] bg-[#e4e4e4] grow'></div>
      </div>
    </div>
  )
}

const galleries = [
  {
    id: '1',
    image: 'y-k-qZ3hE0-BOWw-unsplash.jpg',
  },
  {
    id: '2',
    image: 'adele-payman-2oYMwuFgnTg-unsplash.jpg',
  },
  {
    id: '3',
    image: 'peter-conlan-LEgwEaBVGMo-unsplash.jpg',
  },
  {
    id: '4',
    image: 'biegun-wschodni-vD3L-rN_qNw-unsplash.jpg',
  },
  {
    id: '5',
    image: 'nathan-dumlao-4hjgcuADlL8-unsplash.jpg',
  },
  {
    id: '6',
    image: 'atarin-michaeli-xsXOjEFeDr8-unsplash.jpg',
  },
]

export default Footer
