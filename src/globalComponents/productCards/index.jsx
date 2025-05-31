import { Tooltip } from "antd"


const ProductCard = ({image,discount,pCategory,pName}) => {
  return (
    <>
    <div className='relative border border-transparent hover:border-black100 p-6 rounded-[10px] w-[285px]'>
        <div className=' w-full h-[214px] overflow-hidden rounded-[10px]'>
            <img src={image} alt="Product-Image" className='w-full h-full '/>
        </div>
            {
                discount && (
                    <div className="absolute top-2 right-5 w-fit py-1.5 px-5 bg-orange rounded-[5px]">
                        <span className="text-white font-montserrat font-bold text-base">{discount}%</span>
                    </div>
                )
            }
        <div>
            <h6 className="font-montserrat text-sm font-normal text-black01 uppercase tracking-[5px]">{pCategory}</h6>
            {
                pName?.length > 10 ?(
                    <Tooltip 
                    title={pName}
                    placement="top"
                    >
                        <h4 className="font-poppins text-xl font-semibold text-black01 truncate">{pName}</h4>
                    </Tooltip>
                ) : (
                    <h4 className="font-poppins text-xl font-semibold text-black01">{pName}</h4>
                )
            }

        </div>
    </div>
    </>
  )
}

export default ProductCard