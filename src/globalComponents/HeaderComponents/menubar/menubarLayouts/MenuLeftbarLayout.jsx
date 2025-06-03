import { Link } from 'react-router-dom'
import AllCategoryMenu from '../AllCategories'
import { useTranslation } from 'react-i18next'

const MenuLeftbarLayout = () => {
    const {t} = useTranslation()

  return (
    <>
    <div className='flex items-center gap-x-20'>
        <AllCategoryMenu 
        ismenu={true} 
        className="font-montserrat font-bold text-base text-white cursor-pointer flex items-center gap-x-3"
        />
       <Link to="/products" className='font-montserrat font-bold text-base text-white'>{t('products')}</Link>
        <Link to="/blog" className='font-montserrat font-bold text-base text-white'>{t('blog')}</Link>
        <Link to="/contact" className='font-montserrat font-bold text-base text-white'>{t('contact')}</Link>
    </div>
    </>
  )
}

export default MenuLeftbarLayout