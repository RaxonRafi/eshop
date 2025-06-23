import { supportData } from './supportData'

const SupportSection = () => {
  return (
    <section className='flex items-center justify-between mt-10 lg:mt-20'>
        {
            supportData?.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className='flex flex-wrap items-center gap-x-5'>
                        <span className='text-black01'>
                            <Icon/>
                        </span>
                        <div>
                            <h5 className='font-montserrat font-bold md:text-base text-sm text-black01'>{item.title}</h5>
                            <p className='font-montserrat md:text-base text-xs text-black01'>{item.subtitle}</p>
                        </div>
                            
                    </div>
                )
   
            })
        }
    </section>
  )
}

export default SupportSection