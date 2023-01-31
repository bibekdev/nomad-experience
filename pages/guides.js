import Banner from '@/components/common/Banner'
import Footer from '@/components/common/Footer'
import Head from 'next/head'
import Image from 'next/image'

const Guides = () => {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Services</title>
      </Head>
      <Banner
        image='/images/sefa-yamak-_9dsTKvXowY-unsplash.jpg'
        title='Guides'
      />

      <div className='mt-[80px] grid mx-[91px] grid-rows-1 grid-cols-2'>
        <div>
          <h2 className='w-[509px] h-[120px] text-[40px] font-bold text-primary uppercase leading-[60px]'>
            The Nomad GUIDES
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

      <div className='mx-[91px] flex mt-[110px]'>
        <div>
          <div className='w-[254px] h-[361px] rounded-md shadow-xl shadow-gray-200 relative'>
            <Image
              src='/images/Shahzad-tanga-apar.jpeg'
              width={254}
              height={361}
              alt='photo'
              className='absolute object-cover inset-0 w-full h-full rounded-md'
            />
            <div className='w-[210px] h-[72px] bg-white rounded-md absolute -bottom-8 left-6 shadow-xl shadow-gray-200'>
              <div className='mt-3'>
                <p className='font-medium text-base mx-auto text-center h-[24px] text-primary'>
                  Shahzad
                </p>
                <p className='w-[178px] text-[10.5px] leading-3 text-center font-light mx-auto'>
                  Regional Guide Community Sojourn Facilitator
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[772px] h-[403px] ml-[45px]'>
          <p className='text-[#1e1e1e] text-justify'>
            Like most of our members, I come from a nomadic community myself.
            Our main village is in one location on the northern end of the Vale
            of Kashmir. In the summer time we have high mountain pastures. We
            have sheep, goats and cattle along with some cropland and our main
            staple is corn.We have a very friendly extended family with
            excellent relations in the 5 of the key areas where I can introduce
            you to other our relatives and neighbours, some famous with many
            tourists and some you may not have heard of. But whether in the most
            obscure or very famous tourist locations few tourists have ever seen
            the wonders of the true and ancient communities of the Vale of
            Kashmir. And the specialty of The Nomad Experience is that we
            introduce you to our own communities where life is real. Is it safe?
          </p>
          <p className='mt-5'>
            I have very good experiences waiting for you in all points around
            the territory of Jammu and Kashmir, and I can facilitate activities
            along hilltops, rivers, and forests. I also have connections with
            houseboat owners, the safest and friendliest in the Valley. I can
            also arrange fishing, trekking and even Golf excursions.
          </p>
        </div>
      </div>
      <div className='mx-[91px] flex mt-[110px]'>
        <div className='w-[772px] h-[403px] mr-[45px]'>
          <p className='text-[#1e1e1e] text-justify'>
            Like most of our members, I come from a nomadic community myself.
            Our main village is in one location on the northern end of the Vale
            of Kashmir. In the summer time we have high mountain pastures. We
            have sheep, goats and cattle along with some cropland and our main
            staple is corn.We have a very friendly extended family with
            excellent relations in the 5 of the key areas where I can introduce
            you to other our relatives and neighbours, some famous with many
            tourists and some you may not have heard of. But whether in the most
            obscure or very famous tourist locations few tourists have ever seen
            the wonders of the true and ancient communities of the Vale of
            Kashmir. And the specialty of The Nomad Experience is that we
            introduce you to our own communities where life is real. Is it safe?
          </p>
        </div>
        <div>
          <div className='w-[254px] h-[361px] rounded-md shadow-xl shadow-gray-200 relative'>
            <Image
              src='/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'
              width={254}
              height={361}
              alt='photo'
              className='absolute object-cover inset-0 w-full h-full rounded-md'
            />
            <div className='w-[210px] h-[72px] bg-white rounded-md absolute -bottom-8 left-6 shadow-xl shadow-gray-200'>
              <div className='mt-3'>
                <p className='font-medium text-base mx-auto text-center h-[24px] text-primary'>
                  Minu B
                </p>
                <p className='w-[178px] text-[10.5px] leading-3 text-center font-light mx-auto'>
                  Tour Coordinator & Community Champion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-[91px] flex mt-[110px]'>
        <div>
          <div className='w-[254px] h-[361px] rounded-md shadow-xl shadow-gray-200 relative'>
            <Image
              src='/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
              width={254}
              height={361}
              alt='photo'
              className='absolute object-cover inset-0 w-full h-full rounded-md'
            />
            <div className='w-[210px] h-[72px] bg-white rounded-md absolute -bottom-8 left-6 shadow-xl shadow-gray-200'>
              <div className='mt-3'>
                <p className='font-medium text-base mx-auto text-center h-[24px] text-primary'>
                  Shahzad
                </p>
                <p className='w-[178px] text-[10.5px] leading-3 text-center font-light mx-auto'>
                  Regional Guide Community Sojourn Facilitator
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[772px] h-[403px] ml-[45px]'>
          <p className='text-[#1e1e1e] text-justify'>
            Like most of our members, I come from a nomadic community myself.
            Our main village is in one location on the northern end of the Vale
            of Kashmir. In the summer time we have high mountain pastures. We
            have sheep, goats and cattle along with some cropland and our main
            staple is corn.We have a very friendly extended family with
            excellent relations in the 5 of the key areas where I can introduce
            you to other our relatives and neighbours, some famous with many
            tourists and some you may not have heard of. But whether in the most
            obscure or very famous tourist locations few tourists have ever seen
            the wonders of the true and ancient communities of the Vale of
            Kashmir..
          </p>
        </div>
      </div>
      <button className='px-[38px] py-[11px] text-white bg-primary rounded-md block mx-auto mb-[91px]'>
        View all
      </button>
      <Footer />
    </div>
  )
}

export default Guides
