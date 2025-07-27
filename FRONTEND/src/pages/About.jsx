import React from 'react'
import aboutpic from '../images/aboutpic.png'
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div className="h-154 w-370 bg-black rounded-lg ml-7 mt-2 " >
        <div className="h-full w-full flex items-center justify-center" >
          <div className="h-full w-170 flex flex-col text-white" >
            <div className="h-[10px] w-[10px] bg-white mt-20 " ></div>
            <div className="h-[3px] w-[110px] bg-white mt-4 " ></div>
            <div className="h-[3px] w-[150px] bg-white mt-4 " ></div>
            <div className=" h-60 mt-8 text-5xl font-bold font-mon leading-[1.4] ">
              <p>LET'S GO! <br /> THE <span className="text-orange-600 font-sans" >ADVENTURE</span> IS <br /> WAITING FOR YOU </p>
            </div>
            <div className="mb-5" >
              <p>UP TO <span className="text-blue-600" >50%</span> OFF ON TOP BRANDS </p>
            </div>
            <div>
              <button className="bg-orange-600 px-5 py-2 rounded-lg hover:bg-orange-500" >shop now</button>
            </div>
          </div>
          <div className="h-full w-170 " >
            <img id='image' className="h-80 mt-28 ml-20 " src={aboutpic} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;
