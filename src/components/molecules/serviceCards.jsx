import {BsBehance} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi2'

const ServiceCards = () =>{
  return(
    <section className="bg-[#252525] rounded-[5px] md:rounded-2xl p-4 w-[290px] md:w-[350px]">
      <h3 className="font-skmodern font-normal  text-base md:text-2xl text-[#dfffd0]">Product Design</h3>
      <div className="my-5">
        <p className="font-skmodern font-normal  text-[#dfffd0] text-[14px]">Bring on your project designs. You 
        don&apos;t have to be stuck. Let our professionals do the work for you.</p>
        <br/>
        <p className="font-skmodern font-normal  text-[#dfffd0] text-[14px]">A product design helps create products that delight customers by defining product and business goals, and anticipating market opportunities and user needs</p>
      </div>
      <div className="inline-flex gap-4 items-center w-full">
      <hr className="text-white w-[65%]" />
        <p className="text-[#fff] leading-[8.63px] md:leading-6 text-[14px] font-skmodern font-bold">4 hour ago</p>
      </div>

      <section className='flex justify-between items-center'>
        <div className='inline-flex gap-2 items-center my-2'>
          <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#ddfff0]'>
            <BsBehance color='#252525' size={30} />
          </div>
          <div className='flex flex-col gap-2 justify-start'>
            <p className='font-skmodern font-bold text-[12px] leading-[8.63px] tracking-[0.173px] md:tracking-[0.48px] md:text-lg md:leading-6 text-[#fff]'>Behance</p>
            <p className='inline-flex gap-2 items-center font-skmodern font-normal text-[12px] leading-[8.63px] tracking-[0.173px] md:tracking-[0.48px] md:text-lg md:leading-6 text-[#fff]'> <HiOutlineUsers size={25} /> 140-300</p>
          </div>
        </div>
        <p className='px-2 py-1 bg-[#ddfff0] font-skmodern font-normal text-[#131517] text-[12px] md:text-lg leading-[8.632px] md:leading-6 tracking-[0.173px] rounded-2xl md:tracking-[0.48px]'>20 Jobs</p>
     </section>
    </section>
  )
}

export default ServiceCards;