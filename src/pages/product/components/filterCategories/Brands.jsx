import { Checkbox } from 'antd'

const Brands = () => {
  return (
    <>
    <div className='my-5'>
        <h4 className="font-montserrat font-bold text-xl text-black01">
          Brands
        </h4>
        <div className="mt-5">
          <ul>
            <li className="my-3 flex items-center justify-between">
              <Checkbox className="!font-montserrat !text-base !text-black01">
                Apple
              </Checkbox>
                <span>( 100 )</span>
            </li>
            <li className="my-3 flex items-center justify-between">
              <Checkbox className="!font-montserrat !text-base !text-black01">
                Samsung
              </Checkbox>
                <span>( 428 )</span>
            </li>
            <li className="my-3 flex items-center justify-between">
              <Checkbox className="!font-montserrat !text-base !text-black01">
                ASUS
              </Checkbox>
                <span>( 323 )</span>
            </li>
            <li className="my-3 flex items-center justify-between">
              <Checkbox className="!font-montserrat !text-base !text-black01">
                Dell
              </Checkbox>
                <span>( 298 )</span>
            </li>
            <li className="my-3 flex items-center justify-between">
              <Checkbox className="!font-montserrat !text-base !text-black01">
                Lenovo
              </Checkbox>
                <span>( 180 )</span>
            </li>
            <li className="my-3 flex items-center justify-between">
              <Checkbox className="!font-montserrat !text-base !text-black01">
                HP
              </Checkbox>
                <span>( 98 )</span>
            </li>
            <li className="my-3 flex items-center justify-between">
              <Checkbox className="!font-montserrat !text-base !text-black01">
                Panasonic
              </Checkbox>
                <span>( 17 )</span>
            </li>
          </ul>
        </div>
    </div>

    </>
  )
}

export default Brands