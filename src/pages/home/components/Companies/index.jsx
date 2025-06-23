import samsang from '../../../../assets/images/brands/samsung.png'
import openai from '../../../../assets/images/brands/openai.png'
import amazon from '../../../../assets/images/brands/amazon.png'
import tencent from '../../../../assets/images/brands/tencent.png'
import spotify from '../../../../assets/images/brands/spotify.png'

const Companines = () => {
  return (
    <section className='mt-20 flex flex-wrap items-center lg:justify-between gap-5 lg:gap-0 justify-center'>
      <div className='w-[33%] lg:w-fit'>
        <img src={samsang} alt="samsang" />
      </div>
      <div className='w-[33%] lg:w-fit'>
        <img src={openai} alt="openai" />
      </div>
      <div className='w-[33%] lg:w-fit'>
        <img src={amazon} alt="amazon" />
      </div>
      <div className='w-[33%] lg:w-fit'>
        <img src={tencent} alt="tencent" />
      </div>
      <div className='w-[33%] lg:w-fit'>
        <img src={spotify} alt="spotify" />
      </div>
    </section>
  )
}

export default Companines