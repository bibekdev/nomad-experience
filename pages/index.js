import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-[url('../assets/images/pawel-janiak-FOa_hZ1bxiI-unsplash.jpg')] h-[640px] w-full bg-cover bg-center relative text-white overflow-x-hidden">
        <div className='bg-black opacity-95'></div>
        <Navbar />
        <div className='absolute top-[231px] left-[500px] text-center '>
          <p className='uppercase text-[22px] font-medium leading-[33px]'>
            Open your mind to
          </p>
          <h1 className='font-bold text-[42px] leading-[63px]'>
            The Hidden World Of Nomads
          </h1>
        </div>

        <div className='absolute bottom-8 left-[120px] flex gap-x-5'>
          <div className='bg-white px-[58px] py-[19px] rounded-2xl w-[1000px] h-[90px]'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button className='bg-primary text-white w-[200px] h-[90px] rounded-2xl text-center'>
            Search
          </button>
        </div>
      </div>

      <div className='mt-10'>
        <h2 className='text-center text-[38px] font-semibold text-primary leading-[57px] h-[57px] w-full'>
          Nomadic Loyalty
        </h2>
        <div className='mx-auto w-[813px] mt-5 text-center font-medium text-xl h-[120px] text-[#1e1e1e] leading-[30px]'>
          <p>Nomads have their own ways of deciding among themselves</p>
          <p>who should go, where, for how long, and why.</p>
          And when they return, they share those resources broadly within the
          community. And there always remains the banner or social covering.
        </div>
        <p className='text-center text-base text-[#525252] leading-[57px] h-[57px] w-full'>
          Nomads around the world have told me, "that is a fate worse than
          death".
        </p>
        <p className='text-center uppercase text-sm text-primary leading-[21px] h-[57px] w-full cursor-pointer'>
          View more
        </p>
      </div>

      <div className='flex justify-around mx-[91px] mt-8'>
        <div className='flex justify-evenly gap-x-3'>
          <div className="bg-[url('../assets/images/okwaeze-otusi-ZLAVr4QwIbA-unsplash.jpg')] w-[183px] h-[250px] bg-cover rounded-md"></div>
          <div className='flex flex-col justify-center'>
            <div className='font-semibold text-xl leading-[30px]'>
              <h4>Service &</h4> <h4>Trade Nomads</h4>
            </div>
            <p className='w-[177px] text-[11px] my-4'>
              Paving roads, working with metal, leather and other crafts,
              collecting, buying and selling, or any number of other services,
              these nomads are often urban and thrive in cities around the
              world, maybe even yours!
            </p>
            <a className='text-primary text-[11px] mt-2 leading-4' href='#'>
              View more...
            </a>
          </div>
        </div>
        <div className='flex justify-evenly gap-x-3'>
          <div className="bg-[url('../assets/images/masoud-momenian-1NRJxv4BJAU-unsplash.jpg')] w-[183px] h-[250px] bg-cover rounded-md"></div>
          <div className='flex flex-col justify-center'>
            <div className='font-semibold w-[176px] text-xl leading-[30px]'>
              <h4>Agro- </h4> <h4>Pastoral Nomads</h4>
            </div>
            <p className='w-[177px] text-[11px] my-6'>
              Often combining small scale farming with larger scale animal
              herding these nomads are sometimes hard to distinguish from
              traditionally settled farmers
            </p>
            <a className='text-primary text-[11px] mt-2 leading-4' href='#'>
              View more...
            </a>
          </div>
        </div>
        <div className='flex justify-evenly gap-x-3'>
          <div className="bg-[url('../assets/images/janko-ferlic-3cGIfBWmoms-unsplash.jpg')] w-[183px] h-[250px] bg-cover rounded-md"></div>
          <div className='flex flex-col justify-center'>
            <div className='font-semibold text-xl leading-[30px]'>
              <h4>Hunter &</h4>
              <h4>Collector Nomads</h4>
            </div>
            <p className='w-[177px] text-[11px] my-6'>
              Even this is not necessarily what you might have guessed. In
              Africa and Asia some traditional "Hunter-Gatherers" are among the
              wealthiest and most educated peoples of the world!
            </p>
            <a className='text-primary text-[11px] mt-2 leading-4' href='#'>
              View more...
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[url('../assets/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg')] h-[432px] w-full mt-20 bg-cover bg-center relative">
        <div className='bg-black absolute opacity-40 h-[432px] w-full'></div>
        <div className='absolute top-32 left-24 text-white'>
          <h4 className='font-semibold text-[22px] leading-[33px]'>
            ADVENTURE
          </h4>
          <h2 className='text-[42px] leading-[63px] font-bold'>
            Yours Perfect Explore Destinations
          </h2>
          <p className='text-lg leading-[27px]'>Activities & Accommodations</p>
          <button className='text-[15px] leading-6 rounded px-6 mt-4 text-center bg-primary py-3'>
            Learn More
          </button>
        </div>
      </div>

      <div className='mt-10'>
        <h2 className='text-center text-[38px] font-semibold text-primary leading-[57px] h-[57px] w-full'>
          Choose a Continent
        </h2>
        <div className='mx-auto w-[813px] mt-5 text-center font-medium text-xl h-[60px] text-[#1e1e1e] leading-[30px]'>
          <p>Nomads network naturally.</p>
          <p>It's part of their DNA, there 'way of being'.</p>
        </div>
        <p className='text-center text-base text-[#525252] w-full mt-[10px]'>
          Our relational network connects you with nomads on every continent.
        </p>
      </div>

      {/* IMAGE GALLERY  */}
      <div className='mx-[91px] flex justify-between mt-10'>
        <div className='flex flex-col gap-y-5'>
          <div className="bg-[url('../assets/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg')] w-[363px] h-[202px] bg-cover bg-center rounded-md relative drop-shadow-lg">
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              Central Asia
            </p>
          </div>
          <div className="bg-[url('../assets/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg')] w-[363px] h-[202px] bg-cover bg-center rounded-md relative drop-shadow-lg">
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              North Europe
            </p>
          </div>
          <div className="bg-[url('../assets/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg')] w-[363px] h-[202px] bg-cover bg-center rounded-md relative drop-shadow-lg">
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              The Sahel
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-y-6'>
          <div className="bg-[url('../assets/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg')] w-[490px] h-[312px] bg-cover bg-center rounded-md relative drop-shadow-lg">
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              South East Asia
            </p>
          </div>
          <div className="bg-[url('../assets/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg')] w-[490px] h-[312px] bg-cover bg-center rounded-md relative drop-shadow-lg">
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              North Africa & The Sahara
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-y-5'>
          <div className="bg-[url('../assets/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg')] w-[363px] h-[202px] bg-cover bg-center rounded-md relative drop-shadow-lg">
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              The Middle East
            </p>
          </div>
          <div className="bg-[url('../assets/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg')] w-[363px] h-[202px] bg-cover bg-center rounded-md relative drop-shadow-lg">
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              South Europe
            </p>
          </div>
          <div className="bg-[url('../assets/images/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg')] w-[363px] h-[202px] bg-cover bg-center rounded-md relative drop-shadow-lg">
            <p className='absolute text-sm bottom-3 left-5 text-white'>
              Turkey
            </p>
          </div>
        </div>
      </div>

      <button className='block mt-10 bg-primary font-bold w-[168px] h-[48px] text-center rounded-md mx-auto text-white'>
        Show All Places
      </button>

      <div className='mx-[91px] flex mt-20'>
        <div className='mr-[123px]'>
          <h2 className='text-primary font-bold text-[38px] leading-[57px]'>
            Our Tribal Guides
          </h2>
          <h6 className='font-medium w-[308px] text-xl mt-2 text-[#1e1e1e]'>
            Here we'll show profiles of our regional and country partners.
          </h6>
          <p className='w-[351px] text-base mt-2 text-[#525252]'>
            Some will be independent local guides from among local nomads and
            their neighbours.
          </p>
          <button className='mt-5 w-[136px] h-[45px] text-center bg-primary rounded-md text-white text-base'>
            View all
          </button>
        </div>
        <div className='grow flex justify-between'>
          <div className="bg-[url('../assets/images/masoud-momenian-1NRJxv4BJAU-unsplash.jpg')] w-[274px] h-[361px] bg-cover rounded-md shadow-xl shadow-gray-200 relative">
            <div className='w-[210px] h-[72px] bg-white rounded-md absolute -bottom-8 left-8 shadow-xl shadow-gray-200'>
              <div className='mt-3'>
                <p className='font-medium text-base mx-auto w-[37px] h-[24px] text-primary'>
                  Matt
                </p>
                <p className='w-[120px] text-[10.5px] leading-3 text-center font-light mx-auto'>
                  Tour Coordinator & Community Champion
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[url('../assets/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg')] w-[274px] h-[361px] bg-cover rounded-md shadow-xl shadow-gray-200 relative">
            <div className='w-[210px] h-[72px] bg-white rounded-md absolute -bottom-8 left-8 shadow-xl shadow-gray-200'>
              <div className='mt-3'>
                <p className='font-medium text-base mx-auto w-[54px] h-[24px] text-primary'>
                  Minu B
                </p>
                <p className='w-[120px] text-[10.5px] leading-3 text-center font-light mx-auto'>
                  Tour Coordinator & Community Champion
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[url('../assets/images/Shahzad-tanga-apar.jpeg')] w-[274px] h-[361px] bg-cover rounded-md shadow-xl shadow-gray-200 relative">
            <div className='w-[210px] h-[72px] bg-white rounded-md absolute -bottom-8 left-8 shadow-xl shadow-gray-200'>
              <div className='mt-3'>
                <p className='font-medium text-base mx-auto w-[71px] h-[24px] text-primary'>
                  Shahzad
                </p>
                <p className='w-[178px] text-[10.5px] leading-3 text-center font-light mx-auto'>
                  Regional Guide Community Sojorn Facilitator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <h2 className='text-center text-[38px] font-semibold text-primary leading-[57px] h-[57px] w-full'>
          Latest From Blog
        </h2>
        <div className='mx-[91px] flex mt-10'>
          <div className='w-1/2'>
            <div className="bg-[url('../assets/images/kalle-kortelainen-6F-uGWod7Xk-unsplash.jpg')] w-[608px] h-[341px] bg-cover bg-center rounded-md shadow-xl shadow-gray-200"></div>
            <h4 className='font-bold text-xl mt-8 mb-4'>
              Namche Bazaar Travel Guide
            </h4>
            <p className='text-base text-dark-gray w-[618px] mb-6'>
              Namche Bazaar is one of the most important stops along the Everest
              trekking Trail. Known as the capital of the Sherpa homeland,
              Namche is a bustling town carved on the side of a mountain. The
              town is built like an amphitheater overlooking the snow-clad
              Kongde Ri, Kusum Kanguru, Kantega, and Thamserku. Khumbila, the
              holy mountain of the Sherpas, rises right above and stands guard
              over the settlement......
            </p>
            <a href='' className='text-primary text-base'>
              Read more
            </a>
          </div>
          <div className='w-1/2'>
            <div className='flex gap-x-10'>
              <div className="bg-[url('../assets/images/kalle-kortelainen-6F-uGWod7Xk-unsplash.jpg')] w-[220px] h-[180px] bg-cover bg-center rounded-md shadow-xl shadow-gray-200"></div>
              <div className='w-[350px]'>
                <h4 className='font-bold text-base leading-[25px]'>
                  Nar Phu Valley – Hidden Jewel of Nepal Himalayas
                </h4>
                <p className='text-sm mt-2 mb-4'>
                  Nar Phu Valley is the hidden jewel of Nepal Himalaya. Located
                  in the Annapurna Region, close to the Tibet border, this area
                  is one of the last.......
                </p>
                <a href='' className='text-primary text-base'>
                  Read more
                </a>
              </div>
            </div>
            <div className='flex gap-x-10 mt-8'>
              <div className="bg-[url('../assets/images/kalle-kortelainen-6F-uGWod7Xk-unsplash.jpg')] w-[220px] h-[180px] bg-cover bg-center rounded-md shadow-xl shadow-gray-200"></div>
              <div className='w-[350px]'>
                <h4 className='font-bold text-base leading-[25px]'>
                  Annapurna Base Camp
                </h4>
                <p className='text-sm mt-2 mb-4'>
                  The Annapurna Base Camp lies at the base of the tenth-highest
                  mountain in the world, the Annapurna (8091m).It is the final
                  destination of the.......
                </p>
                <a href='' className='text-primary text-base'>
                  Read more
                </a>
              </div>
            </div>
            <div className='flex gap-x-10 mt-8'>
              <div className="bg-[url('../assets/images/kalle-kortelainen-6F-uGWod7Xk-unsplash.jpg')] w-[220px] h-[180px] bg-cover bg-center rounded-md shadow-xl shadow-gray-200"></div>
              <div className='w-[350px]'>
                <h4 className='font-bold text-base leading-[25px]'>
                  Everest Base Camp
                </h4>
                <p className='text-sm mt-2 mb-4'>
                  Everest Base Camp, located at the foot of the world’s tallest
                  mountain Mount Everest, is a dream destination for trekkers.
                  Dubbed as one of the.......
                </p>
                <a href='' className='text-primary text-base'>
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className='mt-20 z-10'>
        <h2 className='text-center text-[38px] font-semibold text-primary leading-[57px] h-[57px] w-full'>
          Recent Reviews
        </h2>
        <div className='mt-10 mx-[91px]'>
          <div className='bg-red-500 w-[330px] h-[274px] rounded-md z-50'>
            <div className='flex items-center gap-x-4 pt-5 ml-8'>
              <img
                src='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                alt='photo'
                className='w-[40px] h-[40px] object-cover rounded-full '
              />
              <h6 className='font-semibold text-base'>Rijesh Lopchan</h6>
            </div>
            <div className='mt-5 ml-4 flex text-[#FFCC00]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-[10px] h-[10px]'>
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-[10px] h-[10px]'>
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-[10px] h-[10px]'>
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-[10px] h-[10px]'>
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-[10px] h-[10px]'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                />
              </svg>
            </div>
            <div className='mt-5 mx-[17px]'>
              <p className='text-sm w-[296px] text-left'>
                Extremely blessed temples in the mountains. To reach the
                difficulty of 20 miles long, from the wilderness.Beautiful
                mountains, you are in the next world. 2 miles [2 km] distance is
                done by leg or pony.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SUBSCRIBE FOR NEWSLETTER */}
      <div className="-mt-20 bg-[url('../assets/images/pawel-janiak-FOa_hZ1bxiI-unsplash.jpg')] h-[603px] w-full bg-cover bg-center relative text-white overflow-x-hidden">
        <div className='bg-black absolute opacity-40 h-full w-full'></div>
        <div className='absolute bottom-32 left-[25%]'>
          <h1 className='font-semibold text-[42px] w-[561px] mx-auto'>
            <span>Subscribe For </span>
            <span className='text-primary'>NEWSLETTER</span>
          </h1>
          <p className='text-center w-[742px] mx-auto text-lg'>
            We don't have a newsletter yet but you will be the first to know
            when we're ready to start connecting you with nomads journeys on
            every continent.
          </p>
          <form className='mx-auto text-center'>
            <input
              type='email'
              className='w-[337px] h-[45px] px-6 py-2.5 placeholder:text-white ring-1 ring-primary text-sm bg-transparent rounded-md focus:outline-none mr-4 mt-10'
              placeholder='Enter your e-mail address...'
            />
            <button className='bg-primary w-[136px] h-[45px] text-center rounded-md'>
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}
