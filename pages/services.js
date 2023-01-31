import Banner from '@/components/common/Banner'
import Footer from '@/components/common/Footer'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import Head from 'next/head'
import Slider from 'react-slick'
import ProductCard from '@/components/common/ProductCard'
import Heading from '@/components/common/Heading'

const Services = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  }
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Services</title>
      </Head>
      <Banner
        image='/images/sefa-yamak-_9dsTKvXowY-unsplash.jpg'
        title='Our Reach'
      />

      <div className='mt-[80px] grid mx-[91px] grid-rows-1 grid-cols-2'>
        <div>
          <h2 className='w-[509px] h-[120px] text-[40px] font-bold text-primary uppercase leading-[60px]'>
            Choose A CONTINENT
          </h2>
        </div>
        <div>
          <p className='text-lg text text-black-text font-normal'>
            Nomads network naturally. It’s part of their DNA, there ‘ way of
            being ’. Our relational network connects you with nomads on every
            continent.
          </p>
        </div>
      </div>
      <div className='mt-20'>
        <Heading>Central Asia</Heading>
        <Slider {...settings} className=' mx-[91px] w-auto mt-10'>
          {contents.map(content => (
            <ProductCard content={content} />
          ))}
        </Slider>
      </div>

      <div className='mt-20'>
        <Heading>South East Asia</Heading>
        <Slider {...settings} className='mx-[91px] w-auto mt-10'>
          {contents.map(content => (
            <ProductCard content={content} />
          ))}
        </Slider>
      </div>

      <div className='mt-20'>
        <Heading>Middle East</Heading>
        <Slider {...settings} className='mx-[91px] w-auto mt-10'>
          {contents.map(content => (
            <ProductCard content={content} />
          ))}
        </Slider>
      </div>

      <div className='mt-20'>
        <Heading>North Europe</Heading>
        <Slider {...settings} className='mx-[91px] w-auto mt-10'>
          {contents.map(content => (
            <ProductCard content={content} />
          ))}
        </Slider>
      </div>
      {/* </div> */}
      <div className='mt-20 mb-[355px]'>
        <button className='w-[136px] mx-auto block h-[45px] font-smibold text-center bg-primary rounded-md text-white text-[15px] leading-[22px]'>
          View more
        </button>
      </div>
      <Footer />
    </div>
  )
}

const PrevButton = ({ onClick, className }) => (
  <div className='absolute -left-2 top-[15rem]'>
    <div
      className='flex items-center justify-center rounded-full border-2 border-primary h-10 w-10 cursor-pointer'
      onClick={onClick}>
      <MdOutlineNavigateBefore className='w-7 h-7 text-primary' />
    </div>
  </div>
)

const NextButton = ({ onClick, className }) => (
  <div className='absolute -right-2 top-[15rem]'>
    <div
      className='flex items-center justify-center rounded-full border-2 border-primary h-10 w-10 cursor-pointer'
      onClick={onClick}>
      <MdOutlineNavigateNext className='w-7 h-7 text-primary' />
    </div>
  </div>
)

const contents = [
  {
    id: 1,
    image: '/images/Zenkov_cathedral.jpg',
    country: 'Kazakhstan',
    name: 'Ascension Cathedral',
    days: '10-15 Days',
  },
  {
    id: 2,
    image: '/images/1_OnVOwXW4ZllS-xFinqmKcA.webp',
    country: 'Tibet',
    name: 'Tashilhunpo Monastery',
    days: '10 Days',
  },
  {
    id: 3,
    image: '/images/Turkmenbashi-Ruhy-Mosque-1-1.jpg',
    country: 'Turkmenistan',
    name: 'Turkmenbashy Ruhy Mosque',
    days: '16 Days',
  },
  {
    id: 4,
    image: '/images/Zenkov_cathedral.jpg',
    country: 'Uzbekistan',
    name: 'Shah-i-Zinda',
    days: '10 Days',
  },
  {
    id: 5,
    image: '/images/Zenkov_cathedral.jpg',
    country: 'Kazakhstan',
    name: 'Ascension Cathedral',
    days: '10-15 Days',
  },
]

export default Services
