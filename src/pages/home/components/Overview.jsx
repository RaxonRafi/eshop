import Container from '../../../globalComponents/Container'
import overview01 from '../../../assets/images/products/overvire01.png'
import overview02 from '../../../assets/images/products/overview02.png'

const Overview = () => {
  return (
    <section className='mt-[80px]'>
    <Container>
      <div className='grid grid-cols-[auto_auto] gap-x-5'>

        <img 
        src={overview01} alt="overview01" 
        className='w-fu ll h-full object-cover'
        />
        <img 
        src={overview02} alt="overview01" 
        className='w-full h-full object-cover'
        />
       
      </div>
    </Container>

    </section>
  )
}

export default Overview