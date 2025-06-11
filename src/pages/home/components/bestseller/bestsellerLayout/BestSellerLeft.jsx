import { useTranslation } from "react-i18next";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FeaturedProductsData } from "../../faturedProducts/featuredData";
import ProductCard from "../../../../../globalComponents/productCards";

const BestSellerLeft = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='flex items-center justify-between mb-12'>
            <h3 className='font-poppins text-[36px] font-semibold text-black01'>{t('best_seller')}</h3>
            <Link to="/product" className='flex items-center gap-x-2 font-montserrat text-base font-bold text-orange group'>
                {t("view_all")}{" "}
                <span className='group-hover:translate-x-2 transition-transform duration-300'>
                    <HiArrowLongRight size={24}/> 
                </span>
            </Link>
        </div>
      <div className="grid grid-cols-3 gap-2">
        {
          FeaturedProductsData?.slice(0,6).map((product)=>(
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
  )
}

export default BestSellerLeft