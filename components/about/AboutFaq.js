import { Disclosure } from '@headlessui/react'
import React from 'react'
import { BiCaretDown } from 'react-icons/bi'

const AboutFaq = () => {
  return (
    <div className='mx-[91px] mt-[80px] mb-[91px]'>
      <h2 className='font-semibold text-[38px] leading-[57px] text-primary'>
        FAQ's
      </h2>
      <div className='mt-[30px]'>
        <div className='flex flex-col gap-y-9'>
          {items.map(item => (
            <Disclosure key={item.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as='h6'
                    className='flex gap-x-5 items-center cursor-pointer font-medium text-xl'>
                    <span>{item.title}</span>{' '}
                    <BiCaretDown className='w-5 h-5' />
                  </Disclosure.Button>
                  <Disclosure.Panel as='p' className='w-[893px] text-lg mt-3'>
                    {item.description}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  )
}

const items = [
  {
    id: 1,
    title: 'How can we reach Nomad?',
    description:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor sit amet. Placeat nostrud natus tempora justo nostrud natus tempora.',
  },
  {
    id: 2,
    title: 'How can we book?',
    description:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor sit amet. Placeat nostrud natus tempora justo nostrud natus tempora.',
  },
  {
    id: 3,
    title: 'Can I take photographs during my Vacation?',
    description:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor sit amet. Placeat nostrud natus tempora justo nostrud natus tempora.',
  },
  {
    id: 4,
    title: 'How experienced are the Tribal Scouts?',
    description:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor sit amet. Placeat nostrud natus tempora justo nostrud natus tempora.',
  },
  {
    id: 5,
    title: 'I am a Solo traveler. May I join the group for Scouts?',
    description:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor sit amet. Placeat nostrud natus tempora justo nostrud natus tempora.',
  },
  {
    id: 6,
    title: 'Can we charter a private helicopter tour to Annapurna Base Camp?',
    description:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor sit amet. Placeat nostrud natus tempora justo nostrud natus tempora.',
  },
  {
    id: 7,
    title: 'Does weather affect the helicopter flight to Annapurna Base Camp?',
    description:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor sit amet. Placeat nostrud natus tempora justo nostrud natus tempora.',
  },
  {
    id: 8,
    title: 'Is Annapurna Base Camp Helicopter Tour safe?',
    description:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor sit amet. Placeat nostrud natus tempora justo nostrud natus tempora.',
  },
]

export default AboutFaq
