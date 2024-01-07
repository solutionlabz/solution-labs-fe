import SolLabLogo from '../../assets/sLabLogo.png'
// import Button from '../atoms/button';
import { RiMenu3Fill} from 'react-icons/ri'
const NavBar = () =>{
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
    <li key={option.id} className='text-[#252525] text-lg font-normal font-skmodern tracking-[0.72px] cursor-pointer'>{option.name}</li>
  );
  return(
    <section className='relative z-10'>
      <nav className='flex justify-between items-center py-6 px-4 lg:px-24'>
        <div>
          <img src={SolLabLogo} alt='Solution Lab' className='w-full h-full' />
        </div>
        <ul className='hidden lg:flex justify-between w-[60%] items-center'>
        {listItems}
        <button className='px-10 py-5 rounded-lg bg-transparent text-[#252525] text-lg font-normal leading-[0.72px] font-skmodern'>
          Log In
        </button>
       {/* <Button text='Sign Up' bgColor='#252525' /> */}
        <button className=' px-3 md:px-7 py-5 lg:py-2 rounded-lg text-[#DFFFD0] text-base bg-[#252525] lg:text-lg font-normal leading-[0.72px] font-skmodern'>Sign Up</button>
        </ul>
        <div className='inline-flex lg:hidden gap-6 w-[60%] items-center justify-end'>
          {/* <Button text='Sign Up' bgColor='#252525' /> */}
          <button className=' px-3 md:px-7 py-5 lg:py-2 rounded-lg text-[#DFFFD0] text-base bg-[#252525] lg:text-lg font-normal leading-[0.72px] font-skmodern'>Sign Up</button>
          <RiMenu3Fill size={30} color='#252525' />
        </div>
      </nav>
    </section>
  )
}

export default NavBar;