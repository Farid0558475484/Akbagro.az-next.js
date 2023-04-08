import Navbar from "./Navbar";
import { FC } from "react";
import Menu from "./Menu";
import Head from "next/head";

const Header: FC = () => (
  <header>
    <Head>
      <title>AKB Agro</title>
      <meta name="description" content="AKB Agro suvarma sistemləri" />
      <link rel="icon" href="/logo.png" />
    </Head>
    <Navbar />
    <Menu />
  </header>
);

export default Header;
