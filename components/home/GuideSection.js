import Image from 'next/image'

const GuideSection = () => {
  return (
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
        {guides.map(guide => (
          <div
            key={guide.name}
            className='w-[254px] h-[361px] rounded-md shadow-xl shadow-gray-200 relative'>
            <Image
              src={guide.image}
              width={254}
              height={361}
              alt='photo'
              className='absolute inset-0 w-full h-full rounded-md'
            />
            <div className='w-[210px] h-[72px] bg-white rounded-md absolute -bottom-8 left-6 shadow-xl shadow-gray-200'>
              <div className='mt-3'>
                <p className='font-medium text-base mx-auto text-center h-[24px] text-primary'>
                  {guide.name}
                </p>
                <p className='w-[178px] text-[10.5px] leading-3 text-center font-light mx-auto'>
                  {guide.job}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const guides = [
  {
    name: 'Matt',
    job: 'Tour Coordinator & Community Champion',
    image: '/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
  },
  {
    name: 'Minu B',
    job: 'Tour Coordinator & Community Champion',
    image: '/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg',
  },
  {
    name: 'Shahzad',
    job: 'Regional Guide Community Sojorn Facilitator',
    image: '/images/Shahzad-tanga-apar.jpeg',
  },
]

export default GuideSection
