import React, { useEffect } from "react";
import Welcome from "../Components/Home/Welcome";
import Menu from "../Components/Home/Menu";
import Goal from "../Components/Home/Goal";
import About from "../Components/Home/About";
import Contact from "../Components/Home/Contact";
import Partners from "../Components/Home/Partners";
import InvestmentProcess from "../Components/Home/Process";
import Footer from "../Components/Home/Footer";
import Notifications from "../Components/Home/Notifications";
import useUserData from "../Hooks/useUserData";
import useNotification from "../Hooks/useNotification";
import useAuthCheck from "../Hooks/useAuthCheck";
import { useDispatch } from "react-redux";
import { deleteAllNotifications } from "../Redux/notificationSlice";
import { deleteUser } from "../Redux/userSlice";

const Home = () => {
  const { user } = useAuthCheck();
  const dispatch = useDispatch();

  useUserData();
  useNotification();

  useEffect(() => {
    if (!user) {
      dispatch(deleteAllNotifications());
      dispatch(deleteUser());
    }
  }, [user]);

  return (
    <div className="bg-[#0a0f24] text-[#f5f3f0] relative">
      <Menu />
      <Notifications />
      <Welcome />
      <Goal />
      <InvestmentProcess />
      <Partners />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
