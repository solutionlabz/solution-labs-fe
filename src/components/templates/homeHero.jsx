import NavBar from "../molecules/navbar";
import toggleSwitch from '../../assets/Switch.png';
import smallProfile1 from '../../assets/heroSmallProfile1.png';
import smallProfile2 from '../../assets/heroSmallProfile2.png';
import smallProfile3 from '../../assets/heroSmallProfile3.png';
import webxiel from '../../assets/webxiel.png';
import {GoSearch} from 'react-icons/go'
// import Button from "../atoms/button";
import {IoCloseSharp} from 'react-icons/io5'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import girlintech from '../../assets/girl.png'
const HomeHero = ()=>{
  return(
  <section className="h-full relative">
      <div
        className="absolute inset-0 h-[430px]"
        style={{
          background: 'linear-gradient(90deg, white 70%, #DFFD00 70%)',
          filter: 'blur(522.4813842773438px)' 
        }}
      ></div>
      <NavBar />
      <section className="relative z-10 flex md:flex-row flex-col items-center lg:px-24 px-4 my-8">
        <div className="flex flex-col items-start gap-4 w-full lg:w-1/2">
          <div className="inline-flex items-center gap-4">
            <img src={toggleSwitch} alt='toggle-switch' />
            <p className="font-skmodern text-[#131517] leading-6 tracking-[0.64px] font-normal">Get in Touch
            </p>
          </div>
          <h1 className="font-skmodern text-[#131517] text-5xl font-bold">Building Digital<br/>products, brands<br/>and experience</h1>
          <p className="font-skmodern text-lg tracking-[0.72px] font-normal text-[#24272D] ">Solution Labs, empower businesses with innovative IT solutions that drive digital transformation and sustainable growth. 
          </p>
          <div className="lg:hidden">
            {/* <Button text='Get in Touch' bgColor='#252525' /> */}
            <button className=' px-3 md:px-7 py-5 lg:py-2 rounded-lg text-[#DFFFD0] text-base bg-[#252525] lg:text-lg font-normal leading-[0.72px] font-skmodern'>Get in Touch</button>
          </div>
          <div className="inline-flex items-center">
            <img src={smallProfile1} alt='smallProfile1'/>
            <img src={smallProfile2} alt='smallProfile2' className="-ml-1" />
            <img src={smallProfile3} alt='smallProfile2' className="-ml-1" />
          </div>
          <p className="font-skmodern text-[#4D4D4D] font-normal leading-6 tracking-[0.64px]">Over 1000+ projects<br/>completed and live</p>
        </div>
        <div>
          <img src={girlintech} alt='Girl in tech' className='w-fit' />
        </div>
      </section>
      <section className="mx-4 md:mx-10 lg:mx-32 lg:px-10 my-4 py-5 rounded-xl lg:bg-white lg:border-white lg:drop-shadow-xl box-border">
      <div className="flex flex-col gap-4 lg:hidden justify-start items-start">
      <div className="inline-flex gap-7 lg:gap-0 lg:flex lg:justify-between items-center" >
          <div className="inline-flex gap-4 items-center">
            <GoSearch size={25} color="#6E7175" />
            <p className="text-[#6E7175] font-skmodern leading-6 font-normal tracking-[0.64px]">Projects</p>
          </div>
          <MdOutlineKeyboardArrowDown size={25} color='#252525' />
          <div className="w-[1px] h-[25px] bg-[#6E7175]"></div>
      </div>
      <div className="inline-flex gap-7 items-center flex-wrap">
          <p className="inline-flex items-center font-skmodern text-sm md:text-base leading-2 lg:leading-6 tracking-[0.64px] font-normal text-[#252525] gap-2 bg-[#D5D8DB] rounded-[60px] px-3 py-2">
            Web development
             <IoCloseSharp size={20} color='#252525' />
          </p>
          <p className="inline-flex items-center font-skmodern text-sm md:text-base leading-2 lg:leading-6 tracking-[0.64px] font-normal text-[#252525] gap-2 bg-[#D5D8DB] rounded-[60px] px-3 py-2">
            Brand Design
            <IoCloseSharp size={20} color='#252525' />
          </p>
          <p className="inline-flex items-center font-skmodern text-sm md:text-base leading-2 lg:leading-6 tracking-[0.64px] font-normal text-[#252525] gap-2 bg-[#D5D8DB] rounded-[60px] px-3 py-2">
            Product Design
            <IoCloseSharp size={20} color='#252525' />
          </p>
      </div>
        </div>

        {/* LARGE SCREENS */}
        <div className="hidden lg:flex justify-between items-center">
          <div className="inline-flex gap-4 items-center">
            <GoSearch size={25} color="#6E7175" />
            <p className="text-[#6E7175] font-skmodern leading-6 font-normal tracking-[0.64px]">Projects</p>
          </div>
          <MdOutlineKeyboardArrowDown size={25} color='#252525' />
          <div className="w-[1px] h-[25px] bg-[#6E7175]"></div>
          <GoSearch size={25} color="#6E7175" />
          <p className="inline-flex items-center font-skmodern leading-6 tracking-[0.64px] font-normal gap-2 bg-[#D5D8DB] rounded-[60px] px-3 py-2">
            Web development
             <IoCloseSharp size={20} color='#252525' />
          </p>
          <p className="inline-flex items-center font-skmodern leading-6 tracking-[0.64px] font-normal gap-2 bg-[#D5D8DB] rounded-[60px] px-3 py-2">
            Brand Design
            <IoCloseSharp size={20} color='#252525' />
          </p>
          {/* <Button text='Search' bgColor='#252525' /> */}
           <button className=' px-3 md:px-7 py-5 lg:py-2 rounded-lg text-[#DFFFD0] text-base bg-[#252525] lg:text-lg font-normal leading-[0.72px] font-skmodern'>Search</button>
        </div>
      </section>
      <section className="bg-[#D5D5DB] py-3 my-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-[#4F4F4F] font-skmodern text-2xl tracking-[0.96px] font-normal">Trusted by</p>
          <img src={webxiel} alt='webxiel' />
        </div>
      </section>
  </section>

  )
}

export default HomeHero;