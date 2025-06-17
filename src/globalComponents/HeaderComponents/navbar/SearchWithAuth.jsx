import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

const SearchWithAuth = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center w-full gap-x-5">
      <div className="border border-black100 rounded-[10px] flex items-center px-[18px] py-[16px] w-[332px] justify-between">
        <input
          placeholder={t("search_products")}
          type="text"
          className="outline-none w-[90%]"
        />
        <CiSearch size={20} />
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative">
          <FaOpencart size={25} />
          <span className="absolute -top-2 right-0 w-1.5 h-1.5 bg-orange rounded-full"></span>
        </div>
        <div>
          <h6 className="font-montserrat taxt-base text-black01">
            {t("cart")}
          </h6>
          <span className="font-montserrat taxt-base font-bold text-black01">
            $150,00
          </span>
        </div>
      </div>
      <div className="w-[1px] h-[32px] bg-black100"></div>

      <div className="flex items-center gap-x-5">
        <div>
          <FaRegUser size={25} />
        </div>
        <div>
          <h6 className="font-montserrat taxt-base text-black01">
            {t("user")}
          </h6>
          <span className="font-montserrat taxt-base font-bold text-black01">
            {t("account")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchWithAuth;
