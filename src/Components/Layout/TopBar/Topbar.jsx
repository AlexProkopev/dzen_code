import "./Topbar.css";
import Dates from "./Dates";
import SearchForm from "./SearchForm";
import Logo from "./Logo";

const Topbar = () => {
  return (
    <>
      <Logo />
      <SearchForm />
      <Dates />
    </>
  );
};

export default Topbar;
