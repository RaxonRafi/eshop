import { useTranslation } from 'react-i18next';
import Container from '../../../../globalComponents/Container';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import ProductCard from '../../../../globalComponents/productCards';
import { FeaturedProductsData } from './featuredData';

const FeaturedProducts = () => {

    const {t} = useTranslation()
  return (
    <Container>
        <div className='mt-[80px]'>
            <div className='flex items-center justify-between'>
                <h3 className='font-poppins text-[36px] font-semibold text-black01'>{t('Featured_Products')}</h3>
                <Link to="/product" className='flex items-center gap-x-2 font-montserrat text-base font-bold text-orange group'>
                    {t("view_all")}{" "}
                    <span className='group-hover:translate-x-2 transition-transform duration-300'>
                         <HiArrowLongRight size={24}/> 
                    </span>
                   
                </Link>
            </div>
            <div className='grid grid-cols-5 gap-x-5 mt-[30px]'>
                {
                    FeaturedProductsData.map((product)=>(
                        <ProductCard 
                            image={product?.image} 
                            pName={product?.pName}
                            ratings={product?.ratings}
                            pCategory={product?.pCategory}
                            discount={product?.discount}
                            totalRatings={product?.totalRatings}
                            price={product?.price}
                            key={product?.id}
                        />
                    ))
                }
            </div>

        </div>
    </Container>
  )
}

export default FeaturedProducts