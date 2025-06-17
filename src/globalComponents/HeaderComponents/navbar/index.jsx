import Container from "../../Container";
import { Logo } from "../../../assets/svg/Logo";
import SearchWithAuth from "./SearchWithAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 justify-between items-center py-[22px]">
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <SearchWithAuth />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
