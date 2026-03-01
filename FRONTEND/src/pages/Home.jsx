import { useNavigate } from 'react-router';
import aboutpic from '../images/aboutpic.png';
import Contact from '../components/Contact';

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className='min-h-screen bg-gradient w-full relative' >

        {/* hero sections */}
        <div className='min-h-screen w-full'>

          <div className="w-full bg-background rounded-lg md:p-30">

            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">

              {/* left div */}
              <div className="w-full flex flex-col text-white p-5">
                <div className="h-[10px] w-[10px] bg-white md:mt-5"></div>
                <div className="h-[3px] w-[110px] bg-white mt-4"></div>
                <div className="h-[3px] w-[150px] bg-white mt-4"></div>
                <div className=" mt-8 text-xl md:text-5xl font-bold font-mon leading-[1.4]">
                  <p>LET'S GO! <br /> THE <span className="text-orange-600 font-sans" >ADVENTURE</span> IS <br /> WAITING FOR YOU </p>
                </div>
                <div className="mb-5" >
                  <p>UP TO <span className="text-black" >50%</span> OFF ON TOP BRANDS </p>
                </div>
                <div>
                  <button onClick={(() => navigate("/product"))} className="bg-orange-600 px-5 py-2 rounded-lg hover:bg-orange-500">shop now</button>
                </div>
              </div>

              {/* right div */}
              <div className="w-full">
                <img id='image' className="h-40 md:h-80 md:mt-10 md:ml-20 " src={aboutpic} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </section>
    </>
  )
}

export default Home
