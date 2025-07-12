import "./Topbar.css";
import Dates from "./Dates";
import SearchForm from "./SearchForm";
import Logo from "./Logo";
import WebSocketCounter from "../../WebSocketCounter/WebSocketCounter";

const Topbar = () => {
  return (
    <>
      <Logo />
      <SearchForm />
      <WebSocketCounter/>
      <Dates />
      
    </>
  );
};

export default Topbar;
