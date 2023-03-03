import styles from "./Header.module.scss";
import React, { useState } from "react";
import Select from "react-select";
import { useTranslation } from "next-i18next";
import "../../../../i18n";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(localStorage.i18nextLng);

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang.value);
    setSelectedOption(lang.value);
  };
  const options = [
    { value: "TR", label: "TR" },
    { value: "EN", label: "EN" },
  ];

  return (
    <div className={styles.headerRowWrapper}>
      <div className={styles.headerWrapper}>
        <img
          className={styles.logo}
          src="/images/logo.svg"
          srcSet="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYzIDE1OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Im04MC40MDkgMGMtOC43OTQ3IDAtMTUuODc1IDcuMDgwOC0xNS44NzUgMTUuODc2djQ3LjkxOWMtMC40MTY4MS0wLjAzMTYtMC44MzY2NC0wLjA1MjctMS4yNjE5LTAuMDUyN2gtNDcuMTY4Yy04LjkyMTQgMC0xNi4xMDQgNy4wODAzLTE2LjEwNCAxNS44NzVzNy4xODI2IDE1Ljg3NSAxNi4xMDQgMTUuODc1aDQ3LjE2OGMwLjQyNTMgMCAwLjg0NTEzLTAuMDIxMSAxLjI2MTktMC4wNTI3djQ3LjQzNmMwIDguNzk0NyA3LjA4MDMgMTUuODc1IDE1Ljg3NSAxNS44NzVzMTUuODc1LTcuMDgwMyAxNS44NzUtMTUuODc1di00NS41NzJjLTguNzk0NyAwLTE1Ljg3NS04LjI5MTEtMTUuODc1LTE4LjU5MXM3LjA4MDMtMTguNTkxIDE1Ljg3NS0xOC41OTF2LTQ0LjI0NWMwLTguNzk0Ny03LjA4MDMtMTUuODc2LTE1Ljg3NS0xNS44NzZ6IiBmaWxsPSIjZmZmIi8+CiA8cGF0aCBkPSJtOTkuODA5IDYyLjkyNWMtOS4wMDc0IDAtMTYuMjU5IDcuMDQyLTE2LjI1OSAxNS43ODkgMCA3Ljk0MjYgNS45Nzg4IDE0LjQ3OCAxMy44MjIgMTUuNjE0djAuMTc1ODNjMCAwLjA5NDYgMC4wNzc3IDAuMTcwNzUgMC4xNzQxNSAwLjE3MDc1aDI1LjAzNGMwLjA5NjUgMCAwLjE3NDE1LTAuMDc2MiAwLjE3NDE1LTAuMTcwNzVoMjMuOTEyYzkuMDA3NCAwIDE2LjI1OS03LjA0MjUgMTYuMjU5LTE1Ljc5IDAtOC43NDc0LTcuMjUyMS0xNS43ODktMTYuMjU5LTE1Ljc4OXptMjIuOTQ1IDUuMTk0aDI0LjA0OWM2LjA0NDEgMCAxMC45MDkgNC43MjU3IDEwLjkwOSAxMC41OTV2NS4xZS00YzAgNS44Njk2LTQuODY1MyAxMC41OTUtMTAuOTA5IDEwLjU5NWgtMjQuMDQ5eiIgZmlsbD0iI2ZmNjQ2NCIvPgo8L3N2Zz4K"
          width="88px"
          height="86px"
          alt="logo"
        />
        <h1 className={styles.logoText}>{t("common:title")}</h1>
      </div>
      <div className={styles.langWrapper}>
        <Select
          options={options}
          onChange={(event) => handleChangeLang(event)}
          defaultValue={options.find((item) => item.value === selectedOption)}
        />
      </div>
    </div>
  );
};

export default Header;
