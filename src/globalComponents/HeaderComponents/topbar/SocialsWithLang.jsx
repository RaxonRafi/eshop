import { Select } from "antd";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import i18n from "../../../services/i18";

const SocialsWithLang = () => {
  const currencyOptions = [
    { value: "USD", label: "USD" },
    { value: "TAKA", label: "TAKA" },
  ];
  const countriesOptionsWithFlag = [
    {
      value: "us",
      language: "en",
      label: (
        <div className="flex items-center gap-x-2">
          <img
            src="https://flagcdn.com/us.svg"
            alt="flag"
            className="w-[20px] h-[20px]"
          />
          <span>English</span>
        </div>
      ),
    },
    {
      value: "bd",
      language: "bd",
      label: (
        <div className="flex items-center gap-x-2">
          <img
            src="https://flagcdn.com/bd.svg"
            alt="flag"
            className="w-[20px] h-[20px]"
          />
          <span>Bangladesh</span>
        </div>
      ),
    },
  ];
  const handleLanguageChange = (value) => {
    const findLanguage = countriesOptionsWithFlag.find(
      (item) => item.value === value
    );
    if (findLanguage) {
      i18n.changeLanguage(findLanguage.language || "en");
    }
  };
  return (
    <div className="flex items-center w-full lg:gap-x-5 gap-x-2 lg:justify-end">
      <div>
        <Select
          defaultValue={currencyOptions[0].value}
          style={{ width: 80 }}
          onChange={() => {}}
          options={currencyOptions}
          className="custom-select"
        />
      </div>
      <div className="w-[1px] h-[32px] bg-black100"></div>
      <div>
        <Select
          defaultValue={countriesOptionsWithFlag[0].value}
          style={{ width: 120 }}
          onChange={handleLanguageChange}
          options={countriesOptionsWithFlag}
          className="custom-select"
        />
      </div>
      <div className="w-[1px] h-[32px] bg-black100 hidden lg:block"></div>
      <div className="lg:flex items-center gap-x-4 hidden">
        <Link to="#">
          {" "}
          <FaFacebookF color="#303030" />{" "}
        </Link>
        <Link to="#">
          {" "}
          <FaTwitter color="#303030" />{" "}
        </Link>
        <Link to="#">
          {" "}
          <FaInstagram color="#303030" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default SocialsWithLang;
