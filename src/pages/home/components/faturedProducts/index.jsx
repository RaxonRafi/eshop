import { useTranslation } from 'react-i18next';
import Container from '../../../../globalComponents/Container';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import ProductCard from '../../../../globalComponents/productCards';
import { FeaturedProductsData } from './featuredData';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import NextButton from '../../../../globalComponents/NextButton';
import PrevButton from '../../../../globalComponents/PrevButton';

const FeaturedProducts = () => {

    const {t} = useTranslation()
  return (
    <section className='mt-[80px]'>
        <Container>
            <div className='relative'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-poppins text-[36px] font-semibold text-black01'>{t('Featured_Products')}</h3>
                    <Link to="/product" className='flex items-center gap-x-2 font-montserrat text-base font-bold text-orange group'>
                        {t("view_all")}{" "}
                        <span className='group-hover:translate-x-2 transition-transform duration-300'>
                            <HiArrowLongRight size={24}/> 
                        </span>
                    
                    </Link>
                </div>
            
                <div className='next-btn absolute top-2/4 -translate-y-2/4 -right-5 z-30'>
                    <NextButton/>
                </div>
                <div  className='prev-btn absolute top-2/4 -translate-y-2/4 -left-5 z-30'>
                    <PrevButton/>
                </div>
                <Swiper
                spaceBetween={50}
                slidesPerView={5}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
        

                >
                    {
                        FeaturedProductsData.map((product)=>(
                        <SwiperSlide>
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
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </Container>
    </section>
  )
}

export default FeaturedProducts