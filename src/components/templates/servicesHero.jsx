import { useState } from "react";
import Resizable from "../molecules/serviceSlider";
// import ServiceCards from "../molecules/serviceCards";

const ServicesHero = () =>{
  const [activeTab, setActiveTab] = useState(false)
  const services = [
    {
      id: 0,
      name: 'Product Management',
      color: '#A7C3B0',
      number: 34
    },
    {
      id: 1,
      name: 'Design',
      color: '#FDC0AE',
      number: 92
    },
    {
      id: 2,
      name: 'Development',
      color: '#5AFEF4',
      number: 104
    },
    {
      id: 3,
      name: 'Marketing',
      color: '#FEA7D5',
      number: 89
    },
    {
      id: 4,
      name: 'Customer Service',
      color: '#00A79D',
      number: 54
    },
  ]

  const handleClick = () =>{
    setActiveTab(!activeTab)
    console.log()
  }

  const serviceItems = services.map(service =>
    <li 
    onClick={handleClick}
    key={service.id} className={`${activeTab ? 'text-[#0146B1] border-l-[#0146B1]' : 'border-l-[#D6DAE0] text-[#000]' } flex justify-between items-center md:p-3 border-l-2  text-xl md:text-2xl font-normal font-skmodern tracking-[0.96px] cursor-pointer mb-4`}>
    <p>{service.name}</p>
    <p className='text-[#131517] p-2 rounded-md text-lg tracking-[0.72px] font-normal'
    style={{
      backgroundColor: service.color
    }}
    >{service.number}</p>
    </li>
  );

  return(
    <section 
    id='features'
    className="px-4 lg:px-24 ">
      <h2 className="font-skmodern text-[#131517] text-[25px] md:text-5xl font-bold ">We create products, brands and websites<br/> for companies around the world.</h2>
      <section className="block lg:flex justify-between items-end my-4">
        <ul 
        className="w-3/4 lg:w-2/6 my-2">
        {serviceItems}
        </ul>
        <div className="w-full lg:w-1/2">
          <Resizable /></div>
      </section>
    </section>
  )
}

export default ServicesHero;