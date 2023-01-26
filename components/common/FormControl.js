const FormControl = ({ label, type, name, value, subText }) => {
  return (
    <div className='flex flex-col mt-7'>
      <label className='mb-5 font-medium text-base'>
        {label}:{' '}
        {subText ? <span className='text-[#525252]'>({subText})</span> : null}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className='text-[#686868] w-[343px] h-[45px] rounded-lg ring-1 ring-[#686868] focus:outline-none px-5 py-3 bg-[#fafafa]'
      />
    </div>
  )
}

export default FormControl
