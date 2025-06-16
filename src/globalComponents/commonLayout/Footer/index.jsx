import { Link } from "react-router-dom";
import Container from "../../Container";
import { Logo } from "../../../assets/svg/Logo";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { footerLinkList } from "./data";
import visa from "../../../assets/images/payments/visa.png";
import mastercard from "../../../assets/images/payments/mastercard.png";
import applepay from "../../../assets/images/payments/applepay.png";
import paypal from "../../../assets/images/payments/paypal.png";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Container>
      <footer className="mt-20">
        <div className="grid grid-cols-[1fr_2fr] gap-x-2">
          <div className="flex flex-col justify-between h-full">
            <Link to="/">
              <Logo />
            </Link>
            <div>
              <ul>
                <li className="flex items-center gap-x-2 font-montserrat font-normal text-black01 mb-3">
                  <FaPhoneAlt color="#828282" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-x-2 font-montserrat font-normal text-black01 mb-3">
                  <BsEnvelopeFill color="#828282" />
                  <span>information@eshop.com</span>
                </li>
                <li className="flex items-center gap-x-2 font-montserrat font-normal text-black01 mb-3">
                  <FaMapMarkerAlt color="#828282" />
                  <span>123 Main Street, Suite 105, Anytown USA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            {footerLinkList.map((data, index) => (
              <div key={index}>
                <h4 className="font-poppins font-semibold text-xl text-black01">
                  {data.title}
                </h4>
                {data.linkTitle.map((items) => (
                  <div key={items.linkTopic} className="mt-[24px]">
                    <ul>
                      <li className="font-montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75">
                        <Link to={items.to}>{items.linkTopic}</Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <div>
              <div>
                <h4 className="font-poppins font-semibold text-xl text-black01">
                  Payments
                </h4>
                <div className="flex justify-between items-center gap-x-2 mt-[24px]">
                  <img src={visa} alt="visa" />
                  <img src={mastercard} alt="mastercard" />
                  <img src={applepay} alt="applepay" />
                  <img src={paypal} alt="paypal" />
                </div>
              </div>
              <div className="mt-[73px]">
                <h4 className="font-poppins font-semibold text-xl text-black01">
                  Follow Us
                </h4>
                <ul className="mt-[24px]">
                  <li className="font-montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75 mb-3">
                    <Link>Twitter</Link>
                  </li>
                  <li className="font-montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75 mb-3">
                    <Link>Instagram</Link>
                  </li>
                  <li className="font-montserrat font-normal text-base text-black200 hover:text-orange transition-all ease-linear duration-75 mb-3">
                    <Link>Facebook</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-t-black100 flex justify-between items-center py-2">
              <span className="font-montserrat font-normal text-sm text-black200"> Copyright © {year} E-Shop. All Rights Reserved.</span>
              <div className="flex items-center gap-x-3">
                <Link className="font-montserrat font-normal text-black200 text-sm">Privacy Policy</Link>
                <span className="text-black200">|</span>
                <Link className="font-montserrat font-normal text-black200 text-sm">Terms & Condition</Link>
                <span className="text-black200">|</span>
                <Link className="font-montserrat font-normal text-black200 text-sm">Sitemap</Link>
              </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
