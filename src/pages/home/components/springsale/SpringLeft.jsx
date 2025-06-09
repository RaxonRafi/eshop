import React from 'react'
import Countdown from 'react-countdown'
import { useTranslation } from 'react-i18next'
import RenderCountDown from './RenderCountD/RenderCountDown'
import CommonButton from '../../../../globalComponents/CommonButton'

const SpringLeft = () => {
    const {t} = useTranslation()
  return (
    <>
        <div>
            <h3 className='font-poppins font-bold text-[56px] text-black01'>{t('spring_sale')}</h3>
            <div className='mt-5'>
                <Countdown date={Date.now() + 1000000} renderer={RenderCountDown} />
            </div>
            <CommonButton 
            className='!bg-orange !px-10 !h-11 !border-none !mt-[60px]'
            >
                <span className='font-montserrat font-bold text-lg text-white'>Shop now</span>
            </CommonButton>
        </div>
    </>
  )
}

export default SpringLeft