/* eslint-disable no-undef */

const Button = ({text, bgColor}) =>{
  return(
     <button className=' px-3 md:px-7 py-5 lg:py-2 rounded-lg text-[#DFFFD0] text-base lg:text-lg font-normal leading-[0.72px] font-skmodern'
     style={{
      backgroundColor: bgColor
     }}
     >{text}</button>
  )
}

Button.propTypes = myPropTypes;

export default Button;