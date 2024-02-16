import ArrowForward from '../../assets/icons/arrow_forward_ios.svg'

const PagePath = () => {
  return (
    <div className='w-full bg-themeGray h-11 sm:h-14 flex items-center'>
     <div className='flex ml-12 gap-1 text-sm md:text-base'>
        <button >
            Home
            </button>
            <img src={ArrowForward} alt="icon" />
            <button className='font-semibold text-darkThemeOrange'>ArtWorks</button>
     </div>
    </div>
  )
}

export default PagePath