import { Tooltip } from "antd"
import { Link } from "react-router-dom"
import { getStars } from "../../utils/generateRating"
import { getDiscountPrice } from "../../utils/getDiscountPrice"
import { FaOpencart } from "react-icons/fa"
import { FiHeart } from "react-icons/fi"
import { IoShareSocialOutline } from "react-icons/io5"


const ProductCard = ({image,discount,pCategory,pName,ratings,totalRatings,price}) => {
  return (
    <>
    <div className='relative group border border-transparent hover:border-black100 p-6 rounded-[10px]'>
        <div className='w-full h-[214px] overflow-hidden rounded-[10px]'>
            <img src={image} alt="Product-Image" className='w-full h-full '/>

        </div>
        <div className="absolute top-[40%] left-2/4 -translate-x-2/4 invisble opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-linear duration-100">
            <div className="flex items-center gap-x-3">
                <div className="w-[50px] h-[50px] bg-white rounded-full border border-orange flex items-center justify-center text-orange hover:bg-orange hover:text-white cursor-pointer">
                    <FaOpencart/>
                </div>
                <div className="w-[50px] h-[50px] bg-white rounded-full border border-orange flex items-center justify-center text-orange hover:bg-orange hover:text-white cursor-pointer">
                    <FiHeart/>
                </div>
                <div className="w-[50px] h-[50px] bg-white rounded-full border border-orange flex items-center justify-center text-orange hover:bg-orange hover:text-white cursor-pointer">
                    <IoShareSocialOutline/>
                </div>
            </div>
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
                pName?.length > 10 ? (
                    <Tooltip 
                    title={pName}
                    placement="top"
                    >
                        <h4 
                        to="/product"
                        className="font-poppins text-xl font-semibold text-black01 truncate group-hover:text-orange transition-all ease-linear duration-100">{pName}</h4>
                    </Tooltip>
                ) : (
                    <h4 
                    to="/product"
                    className="font-poppins text-xl font-semibold text-black01 truncate group-hover:text-orange transition-all ease-linear duration-100">{pName}</h4>
                )
            }
            <div className="flex items-center gap-x-2 mt-2">
                <div className="flex items-center gap-x-1">
                {getStars(ratings).map((star, index) => (
                    
                    <span key={index} className=" text-yellow ">
                        {star}
                    </span>
                ))}
                </div>
                <span className="font-montserrat font-normal text-base text-black01">({totalRatings})</span>
            </div>
            <div className="flex items-center gap-x-2 mt-2">
                <p className="font-poppins text-2xl font-semibold group-hover:text-orange ">${getDiscountPrice(price,discount)}</p>
                {
                    discount && (
                        <span className="font-poppins text-base font-normal line-through text-black01">${price}</span>
                    )
                }
            </div>
     
        </div>
    </div>
    </>
  )
}

export default ProductCard