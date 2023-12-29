import ClientCard from "./clientCard"
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.png';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const ClientComments = () => {
   const [next, setNext] = useState(1);

  const handleNext = () => {
    if (next === 3) {
      setNext(next);
    } else if (next >= 1) {
      setNext(next + 1);
    }
  };
  const handlePrev = () => {
    if (next === 0) {
      setNext(next);
    } else if (next >= 2) {
      setNext(next - 1);
    }
  };

  return (
    <section 
    id='clients'
    className="px-4 my-12 lg:px-24 flex flex-col">
     <h3 className="font-skmodern font-bold text-[23.41px] md:text-[36px] md:leading-[43.2px] leading-[28.1px] text-[#131517]">Client&apos;s Comments</h3>
      <section className='flex justify-between items-start gap-4'>
        <p className="font-skmodern font-normal tracking-[0.416px] md:tracking-[0.64px] text-base leading-6 text-[#24272D]">
          Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed<br/> praesent pharetra quisque consectetur tellus elit. 
        </p>
         <div className="flex">
          <button
            onClick={handlePrev}
            className={`p-3 flex justify-center items-center border-[2px] ${next === 1 ? 'border-[#4F4F4F] ' : 'bg-[#4F4F4F]'} rounded-[50%] border-[#4F4F4F] hover:bg-[#4F4F4F] hover:text-[#ffffff]`}
          >
            <BsArrowLeft
              onClick={handlePrev}
              className={` bg-transparent hover:text-[#FFFFFF] ${next === 1 ? 'text-[#4F4F4F]' : 'text-[#FFFFFF]'} relative`}
            />
          </button>
         <button
            onClick={handleNext}
            className={`p-3 ml-3 flex justify-center items-center border-[2px] ${next === 3 ? 'border-[#4F4F4F] ' : 'bg-[#4F4F4F]'}  rounded-[50%] hover:bg-[#4F4F4F] border-[#4F4F4F] hover:text-[#ffffff]`}
          >
            <BsArrowRight
              onClick={handleNext}
              className={` bg-transparent ${next === 3 ? ' text-[#4F4F4F]' : ' text-[#FFFFFF]'} hover:text-[#FFFFFF]  relative`}
            />
          </button>
        </div>
      </section>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-6'>
      <ClientCard
      src={client1} 
      name='Chidiebube Iheyinwa'
      role='Head of Engineering'
      color='bg-[#00A79D]' />
      <ClientCard 
      src={client2} 
      name='Chiemerie Chiemeka'
      role='Founder & CEO'
      color='bg-[#966AF5]' />
      <ClientCard 
      src={client3} 
      name='Leleh Stephen'
      role='Head of Design'
      color='bg-[#130052]' />
      <ClientCard 
      src={client4} 
      name='Bryan Chilotam'
      role='Head of Sales'
      color='bg-[#FCA326]' />
      </div>
    </section>
  )
}

export default ClientComments