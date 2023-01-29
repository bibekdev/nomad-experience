import Image from 'next/image'
import React from 'react'

const AboutFeatures = () => {
  return (
    <>
      <div className='mt-[80px] grid mx-[91px] grid-rows-1 grid-cols-2'>
        <div>
          <h2 className='w-[509px] h-[120px] text-[40px] font-bold text-primary uppercase leading-[60px]'>
            Why Choose The Nomad Experience?
          </h2>
        </div>
        <div>
          <p className='text-lg text text-black-text font-normal'>
            We're the only global network that intersects with all types of
            today's traditional nomadic societies on every continent. All of our
            members are either nomads themselves or friendly neighbors who
            interact meaningfully with an abiding and deep relationships.
          </p>
        </div>
      </div>

      <div className='mt-[120px] grid mx-[91px] grid-cols-5 gap-x-16'>
        {contents.map(content => (
          <div key={content.title}>
            <Image
              src={content.svg}
              width={77}
              height={58}
              className='bg-clip-text text-primary ml-5'
            />
            <h6 className='text-primary mt-7 mb-2 text-xl font-medium leading-7'>
              {content.title}
            </h6>
            <p className='text-[12px] w-[163px] text-[#525252] leading-4'>
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

const contents = [
  {
    svg: '/svg/person-alt.svg',
    title: '100+ Customer',
    description:
      'Our relational network connects you with nomads on every continent.',
  },
  {
    svg: '/svg/save-money.svg',
    title: 'Affordable Price',
    description:
      'Our relational network connects you with nomads on every continent.',
  },
  {
    svg: '/svg/globe-pin.svg',
    title: 'Best Destination',
    description:
      'Our relational network connects you with nomads on every continent.',
  },
  {
    svg: '/svg/secure-payment.svg',
    title: 'Secure Payments',
    description:
      'Our relational network connects you with nomads on every continent.',
  },
  {
    svg: '/svg/export.svg',
    title: 'Support Via Chat',
    description:
      'Our relational network connects you with nomads on every continent.',
  },
]

export default AboutFeatures
