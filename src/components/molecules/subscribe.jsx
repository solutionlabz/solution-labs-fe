import subscribe from '../../assets/subscribe.png'
const Subscribe = ()=>{
  return(
    <section className="bg-[#4F4F4F] rounded-3xl flex flex-col md:flex-row md:justify-center w-fit md:h-[400px] md:items-start m-4 lg:mx-24">
      <div className='w-full flex flex-col gap-4 py-6 px-10'>
        <p className="text-[rgb(223,255,208)] font-skmodern text-[18.539px] md:text-4xl font-bold tracking-[0.72px]md:tracking-[1.44px]">Let’s build something great
together.</p>
<p className="font-skmodern text-[9.269px] md:text-lg text-white leading-6 tracking-[0.72px] font-normal">Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed praesent pharetra quisque consectetur tellus elit. Suspendisse ultrices vitae at platea. Euismod pretium sit est etiam.</p>
<button className="bg-[#DFFFD0] rounded-md px-6 py-2 text-center text-[#4F4F4F] font-skmodern w-fit">Get Started</button>
      </div>
      <div className='w-full h-full'>
         <img src={subscribe} alt='girl in tech'  className='  w-full h-full '/>
      </div>
    </section>
  )
}
export default Subscribe