import { IoIosSend } from "react-icons/io";
import SolLabLogo from '../../assets/sLabLogo.png'
const Footer  = ()=>{
  const options = [
    {
      id: 0,
      name: 'Home',
      route: '#'
    },
    {
      id: 1,
      name: 'Works',
      route: '#works'
    },
    {
      id: 2,
      name: 'Features',
      route: '#features'
    },
    {
      id: 3,
      name: 'About',
      route: '#about'
    },
  ]
  const listItems = options.map(option =>
    <li key={option.id} className='text-[#24272D] text-[11.14px] md:text-2xl font-normal font-skmodern tracking-[0.446px] md:tracking-[0.96px] cursor-pointer my-2'>{option.name}</li>
  );
  const about = [
    {
      id: 0,
      name: 'Mission',
      route: '#'
    },
    {
      id: 1,
      name: 'Values',
      route: '#'
    },
    {
      id: 2,
      name: 'Clients',
      route: '#clients'
    },
    {
      id: 3,
      name: 'Our Team',
      route: '#'
    },
  ]
  const aboutItems = about.map(about =>
    <li key={about.id} className='text-[#24272D] text-[11.14px] md:text-2xl font-normal font-skmodern tracking-[0.446px] md:tracking-[0.96px] cursor-pointer my-2'>{about.name}</li>
  );
  return(
    <footer className="px-4 py-4 lg:px-24">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 py-4">
        <div className='col-span-2 w-fit md:col-span-1' >
          <img src={SolLabLogo} alt='Solution Lab' className='w-fit' />
        </div>
        <div>
        <p className="font-skmodern text-[11.14px] font-bold tracking-[0.446px] text-[#131517] md:text-2xl md:tracking-[0.96px]">Menu</p>
          <ul className="w-full">
             {listItems}
          </ul>
        </div>
        <div>
        <p className="font-skmodern text-[11.14px] font-bold tracking-[0.446px] text-[#131517] md:text-2xl md:tracking-[0.96px]">About</p>
          <ul>
             {aboutItems}
          </ul>
        </div>
        <div className="self-end col-span-2 md:col-span-1">
          <p className="text-[#131517] font-skmodern font-normal md:tracking-[0.96px] tracking-[0.446px] my-4 md:text-2xl">Subscribe</p>
          <button className="flex justify-between gap-4 items-center w-fit py-2 px-4 text-[#6E7175] bg-[#DFFFD0] rounded-lg font-skmodern font-normal tracking-[0.223px] md:tracking-[0.48px] md:leading-6 my-2">
          solutionlabs01@gmail.com
          <IoIosSend size={16} color='#4F4F4F' />
          </button>
          <p className="text-[#6E7175] font-skmodern font-normal tracking-[0.223px] md:tracking-[0.48px] text-base md:leading-6">Join our newsletter to stay up to date on features and releases</p>
        </div>
      </section>
      <div className="h-[1px] w-full bg-[#D6DAE0] my-2"></div>
      <div className="inline-flex items-center gap-2 flex-wrap">
        <p className="text-[#6E7175] font-skmodern text-base font-normal md:leading-6 tracking-[0.209px] md:tracking-[0.64px]">2023. JOB. All rights reserved.</p>
        <p className="text-[#6E7175] font-skmodern text-base font-normal md:leading-6  tracking-[0.209px] md:tracking-[0.64px]">Privacy Policy</p>
        <p className="text-[#6E7175] font-skmodern text-base font-normal md:leading-6 tracking-[0.209px] md:tracking-[0.64px]">Terms of Service</p>
      </div>
    </footer>
  )
}

export default Footer;