import Image from 'next/image'

const LastMinuteDeal = () => {
  return (
    <div className='flex flex-col'>
      {data.map(item => (
        <div key={item.id} className='flex gap-x-5 items-center'>
          <div className='w-[162px] h-[120px] rounded-md overflow-hidden'>
            <Image
              src={item.image}
              width={162}
              height={120}
              alt='photo'
              className='rounded-md'
            />
          </div>
          <p className='text-sm'>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

const data = [
  {
    id: 1,
    image: '/images/sylwia-bartyzel-eU4pipU_8HA-unsplash.jpg',
    description: '7 Days in India',
  },
  {
    id: 2,
    image: '/images/mathew-schwartz-gsllxmVO4HQ-unsplash.jpg',
    description: 'Experience Thailand 10 Days',
  },
  {
    id: 3,
    image: '/images/jeremy-bishop-QUwLZNchflk-unsplash.jpg',
    description: 'Indonesia Adventure - 6 Day',
  },
]

export default LastMinuteDeal
