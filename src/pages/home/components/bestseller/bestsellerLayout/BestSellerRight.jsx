import promoBanner from '../../../../../assets/images/products/PromoBanner.jpg'

const BestSellerRight = () => {
  return (
    <div className="md:mt-5 lg:mt-0">
      <img 
        src={promoBanner} 
        alt="promoBanner"
        className='w-full h-full object-cover' 
      />
    </div>
  )
}

export default BestSellerRight