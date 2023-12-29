import ebube from '../../assets/ebube.svg'
import ssebube from '../../assets/ssebube.svg'
import emerie from '../../assets/chie.png'
import quality from '../../assets/quality.svg'
import time from '../../assets/time.svg'
import charge from '../../assets/charge.svg'
import secure from '../../assets/secure.svg'
const WhoWeAre = ()=>{
  return(
    <section 
    id='about'
    className="px-4 my-12 lg:px-24 flex flex-col md:flex-row items-center">
    <section className='w-full'>
      <h3 className="font-skmodern font-bold text-[23.41px] md:text-[36px] md:leading-[43.2px] leading-[28.1px] text-[#131517]">What we are known for</h3>
      <p className="font-skmodern font-normal tracking-[0.416px] md:tracking-[0.64px] text-base leading-6 text-[#24272D]">
        Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed praesent pharetra quisque consectetur tellus elit. Suspendisse ultrices vitae at platea. Euismod pretium sit est etiam.
      </p>
      <div className='grid grid-cols-2 gap-3 items-center my-6'>
        <div className='inline-flex gap-2 md:gap-3 px-5 py-2 items-center rounded-[5.203px] group hover:cursor-pointer hover:shadow-xl hover:border hover:border-white border-[0.56px] border-[#D6DAE0] w-[90%]'
        >
        <img src={quality} className='w-6 h-6 md:w-12 md:h-12' alt='award icon' />
          <p className='font-skmodern font-normal text-[12px] md:text-base leading-6 text-[#4f4f4f] '
          >Quality Job</p>
        </div>
        <div className='inline-flex gap-2 md:gap-3 px-5 py-2 items-center rounded-[5.203px] group hover:cursor-pointer hover:shadow-xl hover:border hover:border-white border-[0.56px] border-[#D6DAE0] w-[90%]'
        >
        <img src={time} className='w-6 h-6 md:w-12 md:h-12' alt='award icon' />
          <p className='font-skmodern font-normal text-[12px] md:text-base leading-6  text-[#4f4f4f] '
          >Deliver on time</p>
        </div>
        <div className='inline-flex gap-2 md:gap-3 px-5 py-2 items-center rounded-[5.203px] group hover:cursor-pointer hover:shadow-xl hover:border hover:border-white border-[0.56px] border-[#D6DAE0] w-[90%]'
        >
        <img src={charge} className='w-6 h-6 md:w-12 md:h-12' alt='award icon' />
          <p className='font-skmodern font-normal text-[12px] md:text-base leading-6  text-[#4f4f4f] '
          >No Extra Charge</p>
        </div>
        <div className='inline-flex gap-2 md:gap-3 px-5 py-2 items-center rounded-[5.203px] group hover:cursor-pointer hover:shadow-xl hover:border hover:border-white border-[0.56px] border-[#D6DAE0] w-[90%]'
        >
        <img src={secure} className='w-6 h-6 md:w-12 md:h-12' alt='award icon' />
          <p className='font-skmodern font-normal text-[12px] md:text-base leading-6 text-[#4f4f4f] '
          >fully secured</p>
        </div>
      </div>
      <section>
        <div>
          <p></p>
        </div>
      </section>
    </section>
    <section className='flex w-full h-full'>
        <div className='md:hidden w-full h-full'>
          <img src={emerie} alt='boy in tech' width={500} height={500} className='w-full h-full'/>
        </div>
        <section className='w-full h-full'>
        <img src={ssebube} alt='girl in tech' width={300} height={300} className='hidden md:block w-full h-full'/>
        <img src={ebube} alt='girl in tech' width={500} height={500} className='w-full h-full md:hidden'/>
        </section>
    </section>
    </section>
  )
}

export default WhoWeAre