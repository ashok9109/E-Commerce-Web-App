import Homevideo from '../videos/Home-video.mp4'

const Home = () => {
  return (
   <>
       <div className='h-full w-full  relative' >
       <div className='h-full w-full  relative ' >
          <video  className='h-full w-full  rounded-lg '  autoPlay loop muted  >
            <source src={Homevideo} />
          </video>
       </div>
          </div>
   </>
  )
}

export default Home
