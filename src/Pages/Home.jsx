import React, { useEffect } from "react";
import Welcome from "../Components/Home/Welcome";
import Menu from "../Components/Home/Menu";
import Goal from "../Components/Home/Goal";
import About from "../Components/Home/About";
import Contact from "../Components/Home/Contact";
import Partners from "../Components/Home/Partners";
import InvestmentProcess from "../Components/Home/Process";
import Footer from "../Components/Home/Footer";
import useAuthCheck from "../Hooks/useAuthCheck";
import { useDispatch } from "react-redux";
import { deleteUser, setUser } from "../Redux/userSlice";

const Home = () => {
  const { user } = useAuthCheck();
  const dispatch = useDispatch();

  useEffect(() => {
    user ? dispatch(setUser(user)) :  dispatch(deleteUser());
  }, [user]);

  return (
    <div className="bg-[#0a0f24] text-[#f5f3f0]  relative">
      <Menu />
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
