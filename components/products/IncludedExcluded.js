import { HiOutlineCheckCircle } from 'react-icons/hi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function IncludedExcluded() {
  return (
    <div className='mx-[91px]'>
      <div className='w-[755.28px]'>
        <h4 className='text-[38px] text-primary font-semibold mb-5'>
          Included/Excluded
        </h4>
        <div className='flex gap-x-20'>
          <div>
            {included.map(item => (
              <div key={item.id} className='flex items-center gap-x-2 gap-y-2'>
                <HiOutlineCheckCircle className='text-[#2EA452]' />
                <p className='text-base text-[#666]'>{item.name}</p>
              </div>
            ))}
          </div>
          <div>
            {excluded.map(item => (
              <div key={item.id} className='flex items-center gap-x-2 gap-y-2'>
                <AiOutlineCloseCircle className='text-[#EF2A38]' />
                <p className='text-base text-[#666]'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const included = [
  { id: 1, name: 'Specialized bilingual guide' },
  { id: 2, name: 'Private Transport' },
  { id: 3, name: 'Entrance fees (Cable and car and Moon Valley)' },
  { id: 4, name: 'Box lunch water, banana apple and chocolate' },
  { id: 5, name: 'Specialized bilingual guide' },
  { id: 6, name: 'Private Transport' },
  { id: 7, name: 'Entrance fees (Cable and car and Moon Valley)' },
  { id: 8, name: 'Box lunch water, banana apple and chocolate' },
]

const excluded = [
  { id: 1, name: 'Departure Taxes' },
  { id: 2, name: 'Entry Fees' },
  { id: 3, name: '5 Star Accommodation' },
  { id: 4, name: 'Airport Transfers' },
  { id: 5, name: 'Specialized bilingual guide' },
  { id: 6, name: 'Departure Taxes' },
  { id: 7, name: 'Entry Fees' },
]
