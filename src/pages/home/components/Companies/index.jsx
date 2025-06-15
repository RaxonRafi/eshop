import samsang from '../../../../assets/images/brands/samsung.png'
import openai from '../../../../assets/images/brands/openai.png'
import amazon from '../../../../assets/images/brands/amazon.png'
import tencent from '../../../../assets/images/brands/tencent.png'
import spotify from '../../../../assets/images/brands/spotify.png'

const Companines = () => {
  return (
    <section className='mt-20 flex items-center justify-between'>
        <img src={samsang} alt="samsang" />
        <img src={openai} alt="openai" />
        <img src={amazon} alt="amazon" />
        <img src={tencent} alt="tencent" />
        <img src={spotify} alt="spotify" />
    </section>
  )
}

export default Companines