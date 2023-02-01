import Banner from '@/components/common/Banner'
import BlogCard from '@/components/common/BlogCard'
import Footer from '@/components/common/Footer'
import Inquiry from '@/components/common/Inquiry'
import ReplySection from '@/components/common/ReplySection'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

const SinglePost = () => {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Blog</title>
      </Head>
      <Banner
        image='/images/sefa-yamak-_9dsTKvXowY-unsplash.jpg'
        title='Blogs > Everest Base Camp'
      />

      <div className='ml-[91px] mr-[150px] mt-20 flex gap-x-9'>
        <div className='w-[900px]'>
          <div className='w-[900px] h-[540px] rounded-md overflow-hidden'>
            <Image
              src='/images/prem-babu-moktan-8oM2kdP9x8c-unsplash.jpg'
              width={900}
              height={540}
              className='w-full h-full object-cover'
            />
          </div>
          <h1 className='uppercase mt-10 font-bold text-[32px] leading-[25px]'>
            Everest Base Camp
          </h1>
          <div className='w-[858px]'>
            <p className='text-black-text mt-10 text-justify'>
              Everest is more than a mountain and the journey to its base camp
              is more than just a trek. Along a route dubbed by some as "the
              steps to heaven," every bend in the trail provides another photo
              opportunity — beautiful forests, Sherpa villages, glacial
              moraines, and foothills. For active adventurers not afraid to
              break a sweat, our full trekking support staff will bring you
              close to local cultures before opening a window to the top of the
              world.{' '}
            </p>
            <p className='text-black-text mt-5 text-justify'>
              The trek to Everest Base Camp is one of the world’s great iconic
              walks. If you love walking, this has to be on your bucket list!
              Our lodge-based trek follows faithfully in the footsteps of Edmund
              Hillary allowing plenty of time to acclimatise properly and enjoy
              the scenery. The trek starts with the rollercoaster flight into
              Lukla, before following the spectacular Khumbu Valley to Everest
              Base Camp. A short climb to the top of Kala Pattar gives
              breath-taking views of the highest mountain on earth, before
              re-tracing our steps back to Lukla.
            </p>
            <p className='text-black-text mt-5 text-justify'>
              Over 300 mountaineers have died while attempting the climb to the
              summit of Mt. Everest since the 1900s. And as it’s so difficult
              and expensive to get people down, the dead bodies of the climbers
              litter the highest peak to this day.
            </p>
            <p className='text-black-text mt-5 text-justify'>
              As people claim, the main reason behind such a high number of
              deaths is overcrowding and the attempts on the climb by beginner
              mountaineers. Lately, the number of deaths in the graph has been
              declining, but dead bodies are still a common sight at the top of
              the mountain. In 2021, only four people died on the mountain, and
              the number was lowered to two by 2022 AD.
            </p>
            <p className='text-black-text mt-5 text-justify'>
              As of November 2022, 310 people had died while climbing the
              world’s highest peak. However, the number of dead bodies left on
              Mount Everest isn’t accurate because of the harsh weather.
            </p>
            <p className='text-black-text mt-5 text-justify'>
              Eleven people died climbing Mount Everest in the spring of 2019,
              and it made headlines everywhere. It was one of the deadliest
              seasons as the death toll rose. In 2015, the same mountain
              experienced an avalanche that swept away 19 people. There are many
              such numbers of deaths and horrific accidents on Everest.
            </p>
          </div>
          <div className='mt-[50px] w-[900px] h-[350px] rounded-md overflow-hidden'>
            <Image
              src='/images/sylwia-bartyzel-FuuEdB1XN4M-unsplash.jpg'
              width={900}
              height={350}
              className='w-full h-full object-cover'
            />
          </div>
          <h1 className='mt-[50px] font-bold text-[32px] leading-[25px]'>
            Why are the bodies still there?
          </h1>
          <p className='text-black-text mt-10 text-justify'>
            when a climber dies while attempting the climb of Mt. Everest. It’s
            very difficult to bring them down. Bringing them down costs a lot of
            dollars and may also take people’s lives. In 1984, two climbers died
            while searching for another dead body on Mt. Everest.
          </p>
          <p className='text-black-text mt-5 text-justify'>
            Most of the time, local authorities send Sherpas to clear the bodies
            along the way. But it’s sometimes very hard to find the bodies
            because of the harsh conditions under the heap of snow and ice. It’s
            also expensive, dangerous, and takes a long time.
          </p>
          <p className='text-black-text mt-5 text-justify'>
            The locations of the corpses are unknown; sometimes they are under
            the ridge or have fallen into crevasses that climbers haven’t seen
            or been to.
          </p>
          <p className='text-black-text mt-5 text-justify'>
            Some of the famous bodies on Mount Everest are Tsewang Paljor,
            “Green Boots,” David Sharp, Rob Hall, Scoot Fischer, Hannelore
            Schmatz, Shriya Shah, “Klorfine,” George Mallory, Francys Arsentiev,
            and Sergei Arsentiev, “Sleeping Beauty.”
          </p>
        </div>
        <div>
          <div className='w-[264px] h-[157px] rounded-md overflow-hidden mb-9'>
            <Image
              src='/images/christopher-burns--jbsw_GUK74-unsplash.jpg'
              width={264}
              height={157}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-[264px] h-[157px] rounded-md overflow-hidden mb-9'>
            <Image
              src='/images/ananya-bilimale-xdvM7wDXZy4-unsplash.jpg'
              width={264}
              height={157}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-[264px] h-[157px] rounded-md overflow-hidden mb-9'>
            <Image
              src='/images/kalle-kortelainen-6F-uGWod7Xk-unsplash.jpg'
              width={264}
              height={157}
              className='w-full h-full object-cover'
            />
          </div>
          <div>
            <Inquiry />
          </div>
        </div>
      </div>
      <div className='w-[984px] mx-[91px] mt-[102px]'>
        <ReplySection />
      </div>
      <div className='mt-[120px] mx-[91px]'>
        <h4 className='text-[#212121] text-[32px] font-semibold'>
          Related Post
        </h4>
        <div className='mt-5'>
          <div className='grid grid-cols-3'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  )
}

export default SinglePost
