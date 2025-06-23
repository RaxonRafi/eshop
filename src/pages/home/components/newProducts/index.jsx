import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../../../../globalComponents/Container'
import AllCategoryMenu from '../../../../globalComponents/HeaderComponents/menubar/AllCategories'
import { FeaturedProductsData } from '../faturedProducts/featuredData'
import ProductCard from '../../../../globalComponents/productCards'
import { Button } from 'antd'

const NewProducts = () => {

    const [initialData, setInitialData] = useState(5)
    const {t} = useTranslation()

    const loadMore = () => {
        setInitialData((prev) => prev + 5)
    }
    
  return (
    <section className='mt-[80px]'>
        <Container>
            <div className='relative'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-poppins text-lg lg:text-[36px] font-semibold text-black01'>{t('New_Products')}</h3>

                    <div className='flex items-center gap-x-2 w-[50%] justify-end'>
                    <span className='font-montserrat font-normal text-sm lg:text-base'>{t('Sort_By')}:   
                    </span>
                    <div className='w-fit lg:w-[30%]'>    
                        <AllCategoryMenu className="font-montserrat font-bold text-sm lg:text-base text-orange cursor-pointer w-full flex justify-between items-center" icons={true}/>
                    </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid lg:grid-cols-5 gap-x-5 gap-y-10 mt-[30px]'>
            {
                FeaturedProductsData?.slice(0,initialData)?.map((product)=>(
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
            <div className='flex items-center justify-center mt-[30px]'>
                {initialData < FeaturedProductsData.length &&(
                    <Button onClick={loadMore} className='!px-[40px] !h-11 !border !border-orange !font-montserrat !font-bold !text-base !text-orange'>{t('load_more')}</Button>
                )}
            </div>

        </Container>
    </section>
  )
}

export default NewProducts