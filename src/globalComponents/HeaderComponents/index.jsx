import Topbar from "./topbar";
import Navbar from "./navbar";
import Menubar from "./menubar";
import MobileNavbar from "./mobileNavbar";
const HeaderComponentsLayout = () => {
  return (
    <>
    <div className="hidden lg:block">
      <Topbar />
      <Navbar />
      <Menubar/>
    </div>
    <div className="lg:hidden">
      <MobileNavbar/>
    </div>
     
    </>
  );
};

export default HeaderComponentsLayout;
