import { Checkbox } from "antd";

const Categories = () => {
  return (
    <>
      <div className="w-full mb-5">
        <h4 className="font-montserrat font-bold text-xl text-black01">
          Categories
        </h4>
        <div className="mt-5">
          <ul>
            <li className="my-3">
              <Checkbox className="!font-montserrat !text-base !text-black01">Computers & Tablets</Checkbox>
            </li>
            <li className="my-3">
              <Checkbox className="!font-montserrat !text-base !text-black01">Mobile & Accessories</Checkbox>
            </li>
            <li className="my-3">
              <Checkbox className="!font-montserrat !text-base !text-black01">TV & Home Theater</Checkbox>
            </li>
            <li className="my-3">
              <Checkbox className="!font-montserrat !text-base !text-black01">Audio & Headphones</Checkbox>
            </li>
            <li className="my-3">
              <Checkbox className="!font-montserrat !text-base !text-black01">Cameras & Camcorders</Checkbox>
            </li>
            <li className="my-3">
              <Checkbox className="!font-montserrat !text-base !text-black01">Gaming Equipment</Checkbox>
            </li>
            <li className="my-3">
              <Checkbox className="!font-montserrat !text-base !text-black01">Home Appliances</Checkbox>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
