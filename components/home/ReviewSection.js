import Image from 'next/image'
import ReviewCard from '../common/ReviewCard'

const ReviewSection = () => {
  return (
    <div className='mt-20 relative overflow-x-hidden'>
      <h2 className='text-center text-[38px] font-semibold text-primary leading-[57px] h-[57px] w-full mb-40'>
        Recent Review
      </h2>
      <div className='mt-10 absolute top-16 flex mx-[91px] z-10 gap-x-10'>
        {reviews.map(review => (
          <ReviewCard
            key={review.name}
            name={review.name}
            description={review.description}
            image={review.image}
          />
        ))}
      </div>
      {/* SUBSCRIBE FOR NEWSLETTER */}
      <div className='mt-[14rem] h-[603px] w-full relative text-white overflow-x-hidden'>
        <Image
          src='/images/y-k-qZ3hE0-BOWw-unsplash.jpg'
          height={603}
          width={1444}
          className='w-full h-full object-cover absolute inset-0 brightness-[30%]'
        />
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
    </div>
  )
}

const reviews = [
  {
    name: 'Rijesh Lopchan',
    description:
      'Extremely blessed temples in the mountains. To reach the difficulty of 20 miles long, from the wilderness.Beautiful mountains, you are in the next world. 2 miles [2 km] distance is done by leg or pony.',
    image:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Sobit Thapa ',
    description:
      'Water from 108 taps is very cold and there are two ponds in front of the temple. The place looked so beautiful.',
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Subham Shrestha',
    description:
      'Extremely blessed temples in the mountains. To reach the difficulty of 20 miles long, from nt of the temple. The place looked so beautiful.',
    image:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Subham Shrestha',
    description:
      'Extremely blessed temples in the mountains. To reach the difficulty of 20 miles long, from the wilderness.Beautiful mountains, you are in the next world. 2 miles [2 km] distance is o beautiful.',
    image:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
  },
]

export default ReviewSection
