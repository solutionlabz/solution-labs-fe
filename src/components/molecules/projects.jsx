import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import alpaca from '../../assets/alpaca.svg'
import coursa from '../../assets/coursa.svg'
import windows from '../../assets/windows.svg'
import research from '../../assets/research.svg'
import sharpArrow from '../../assets/sharpArrow.svg'


const Projects = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return(
    <section 
    id='works'
    className="md:bg-[#F3F7FA] my-6 md:px-4 lg:px-24 ">
    <div className="flex bg-[#F3F7FA] md:bg-none py-8 md:py-4 justify-center md:justify-start gap-4 items-center ">
      <img src={sharpArrow} alt='sharpArrow' className="w-fit md:hidden" />
      <h3 className="bg-[#F3F7FA] md:bg-none font-skmodern md:text-[44.95px] md:leading-[53.93px] text-[#131517] text-2xl leading-[19.2px] font-normal md:font-bold ">
      Some Accomplished Projects
      </h3>
      <img src={sharpArrow} alt='sharpArrow' className="w-fit md:hidden" />
      </div>
      <section className="md:hidden mx-4 rounded-2xl grid grid-cols-2 gap-4">
        <div className="w-full">
          <img src={alpaca} alt='alpaca' className="w-full" />
        </div>
        <div className="w-full">
          <img src={coursa} alt='coursa' className="w-full" />
        </div>
        <div className="w-full">
          <img src={windows} alt='windows' className="w-full" />
        </div>
        <div className="w-full">
          <img src={research} alt='research' className="w-full" />
        </div>
      </section>
       <div className="hidden md:block mx-4 rounded-2xl">
        <Slider {...settings}>
          <div className="w-3/5">
            <img src={alpaca} alt='alpaca' className="w-full" />
          </div>
          <div className="w-3/5">
            <img src={coursa} alt='coursa' className="w-full" />
          </div>
          <div className="w-3/5">
            <img src={windows} alt='windows' className="w-full" />
          </div>
          <div className="w-3/5">
            <img src={research} alt='research' className="w-full" />
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Projects;