import SubscribeForm from "../../../../globalComponents/subscribe/form"

const Subscribe = () => {
  return (
    <section className="mt-20">
        <div className="rounded-[25px] grid grid-cols-[2fr_3fr] overflow-hidden">
            <div className="bg-red py-[114px] pl-[100px] bg-linear-to-r from-white02 to-gray">
                <SubscribeForm/>
            </div>
            <div className="bg-gray">2</div>
        </div>
    </section>
  )
}

export default Subscribe