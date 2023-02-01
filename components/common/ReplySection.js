const ReplySection = () => {
  return (
    <div>
      <p className='mb-10 font-medium text-lg text-[#212121]'>Leave a Reply</p>
      <p className='text-sm mb-8'>
        Your email address will not be published. Required fields are marked
      </p>
      <form>
        <div>
          <label className='text-primary mb-1 block text-sm'>Comment</label>
          <textarea className='w-full h-[150px] text-sm resize-none bg-input-color outline-none rounded-sm px-4 py-3 text-black-text' />
        </div>
        <div className='mt-5 flex justify-between items-center'>
          <div>
            <label className='text-primary block mb-1 text-sm'>Full Name</label>
            <input
              type='text'
              className='w-[440px] h-[45px] text-sm resize-none bg-input-color outline-none rounded-sm px-4 py-3 text-black-text'
            />
          </div>
          <div>
            <label className='text-primary block mb-1 text-sm'>E-mail</label>
            <input
              type='email'
              className='w-[440px] h-[45px] text-sm resize-none bg-input-color outline-none rounded-sm px-4 py-3 text-black-text'
            />
          </div>
        </div>
        <button className='mt-20 text-center bg-primary text-white text-[15px] w-[168px] h-[48px] font-bold rounded-md'>
          Post comment
        </button>
      </form>
    </div>
  )
}

export default ReplySection
