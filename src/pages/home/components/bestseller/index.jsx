import BestSellerLeft from "./bestsellerLayout/BestSellerLeft"
import BestSellerRight from "./bestsellerLayout/BestSellerRight"


const BestSeller = () => {
  return (
    <section className="grid grid-cols-[3fr_1fr] gap-x-4 mt-20">
        <BestSellerLeft/>
        <BestSellerRight/>
    </section>
  )
}

export default BestSeller