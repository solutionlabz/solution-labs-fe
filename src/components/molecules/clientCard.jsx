/* eslint-disable react/prop-types */

const ClientCard = ({ color,src,name, role }) => {
  
  return (
    <section className='rounded-[5px] md:rounded-2xl w-fit py-6 flex flex-col gap-4 justify-center items-center border border-[#D6DAE0]'>
      <div className='w-16 h-16 rounded-full'>
        <img src={src} alt='client 1' width={300} height={300} className='w-full h-full' />
      </div>
      <p className='font-skmodern font-normal text-[12px] md:text-base md:leading-6 md:tracking-[0.101px] leading-[11.07px] text-center mx-auto w-[50%] tracking-[0.63%]'>
        Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam nunc tellus. Sed non sit sed nunc nam nunc tellus.
      </p>
      <div className={`rounded-full w-2 h-2 ${color}`}></div> {/* Apply color prop here */}
      <p className='font-skmodern font-normal text-[12px] md:text-lg md:leading-6 md:tracking-[0.72px] leading-[11.07px] tracking-[4%] text-[#24272D]'>
        {name}
      </p>
      <p className='font-skmodern font-normal text-[12px] md:tracking-[0.48px] md:leading-6 leading-[11.07px] tracking-[4%] text-[#6E7175]'>
        {role}
      </p>
    </section>
  );
};


export default ClientCard;
