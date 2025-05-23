import React from "react";
import Container from "../../Container";
import { Logo } from "../../../assets/svg/Logo";
import SearchWithAuth from "./SearchWithAuth";

const Navbar = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 justify-between items-center py-[22px]">
        <div>
          <Logo />
        </div>
        <div>
          <SearchWithAuth />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
