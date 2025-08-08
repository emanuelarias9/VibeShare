import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

export const PrivateLayout = () => {
  return (
    <>
      <Header />
      <section className="layout__content">
        <Outlet />
      </section>

      <SideBar />
    </>
  );
};
