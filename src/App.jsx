import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AuthPage from "./Pages/AuthPage";
import CompanyDetails from "./Pages/CompanyDetails";
import RegisterCompany from "./Pages/RagisterCompany";
import ProfilePage from "./Pages/ProfilePage";
import ProfileEditPage from "./Pages/ProfileEditPage";
import InvestmentPage from "./Pages/InvestmentPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/auth" element= {<AuthPage/>}/>
        <Route path="/:id" element= {<CompanyDetails/>}/>
        <Route path="/investment/:id" element={<InvestmentPage/>}/>
        <Route path="/register" element= {<RegisterCompany/>}/>
        <Route path="/myprofile" element= {<ProfilePage/>}/>
        <Route path="/edit-profile" element={<ProfileEditPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
