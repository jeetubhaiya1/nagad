import React, { useEffect } from "react";
import DashSidebar from "../../components/DashSidebar/DashSidebar";
import { useAppSelector } from "../../redux/hooks.tsx";

const Home = () => {
  const sideMenuBar = useAppSelector((state) => state.ui.sideMenuBar);

  return <div>{sideMenuBar && <DashSidebar />}</div>;
};

export default Home;
