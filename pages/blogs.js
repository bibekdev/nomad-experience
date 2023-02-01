import Banner from '@/components/common/Banner'
import BlogCard from '@/components/common/BlogCard'
import Footer from '@/components/common/Footer'
import Head from 'next/head'

const Blogs = () => {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Blog</title>
      </Head>
      <Banner
        image='/images/sefa-yamak-_9dsTKvXowY-unsplash.jpg'
        title='Blog'
      />

      <div className='mt-[80px] grid mx-[91px] grid-rows-1 grid-cols-2'>
        <div>
          <h2 className='w-[509px] h-[120px] text-[40px] font-bold text-primary uppercase leading-[60px]'>
            The Nomad BLOGS
          </h2>
        </div>
        <div>
          <p className='text-lg text-justify text-black-text font-normal'>
            We're the only global network that intersects with all types of
            today's traditional nomadic societies on every continent. All of our
            members are either nomads themselves or friendly neighbors who
            interact meaningfully with an abiding and deep relationships.
          </p>
        </div>
      </div>

      <div className='mx-[91px] mt-[110px] grid grid-rows-2 grid-cols-3 gap-y-10'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <div className='mt-10'></div>
      <Footer />
    </div>
  )
}

export default Blogs
