import Head from 'next/head'
import Navbar from '@/components/common/Navbar'
import ReplySection from '@/components/common/ReplySection'
import ButtonGroup from '@/components/products/ButtonGroup'
import HighLights from '@/components/products/HighLights'
import IncludedExcluded from '@/components/products/IncludedExcluded'
import LastMinuteDeal from '@/components/products/LastMinuteDeal'
import Overview from '@/components/products/Overview'
import ProductBlog from '@/components/products/ProductBlog'
import ProgramOfDay from '@/components/products/ProgramOfDay'
import SubHeading from '@/components/products/SubHeading'
import ReviewCard from '@/components/common/ReviewCard'
import Footer from '@/components/common/Footer'

const Product = () => {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <div className='ml-[91px] mt-[41px] w-[85%] text-black'>
        <Navbar />
      </div>
      <h1 className='mt-[89px] ml-[91px] font-semibold text-[38px] leading-[57px] text-primary'>
        Everest Basecamp Trek
      </h1>
      <SubHeading />
      <div className='flex mx-[91px] mt-10 gap-x-[90px]'>
        <div className='w-[850px]'>
          <Overview />
          <HighLights />
        </div>
        <div>
          <ButtonGroup />
          <ProductBlog />
          <ProductBlog />
        </div>
      </div>
      <ProgramOfDay />
      <div className='flex mt-10 gap-x-[90px]'>
        <IncludedExcluded />
        <LastMinuteDeal />
      </div>
      <div className='w-[984px] mx-[91px] mt-[102px]'>
        <ReplySection />
      </div>
      <div className='mt-20 mx-[91px]'>
        <div className='grid grid-cols-3 gap-x-[134px]'>
          {reviews.map(review => (
            <ReviewCard
              key={review.id}
              image={review.image}
              description={review.description}
              name={review.name}
            />
          ))}
        </div>
      </div>
      <div className='mt-[91px]'>
        <Footer />
      </div>
    </>
  )
}

const reviews = [
  {
    id: 1,
    name: 'Rijesh Lopchan',
    description:
      'Extremely blessed temples in the mountains. To reach the difficulty of 20 miles long, from the wilderness.Beautiful mountains, you are in the next world. 2 miles [2 km] distance is done by leg or pony.',
    image:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Sobit Thapa ',
    description:
      'Water from 108 taps is very cold and there are two ponds in front of the temple. The place looked so beautiful.',
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Subham Shrestha',
    description:
      'Extremely blessed temples in the mountains. To reach the difficulty of 20 miles long, from nt of the temple. The place looked so beautiful.',
    image:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
  },
]

export default Product
