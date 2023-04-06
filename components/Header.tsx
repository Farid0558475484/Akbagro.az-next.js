import Navbar from "./Navbar";
import { FC } from "react";
import Menu from "./Menu";

const Header: FC = () => (
  <header>
    <Navbar />
    <Menu />
  </header>
);

export default Header;
