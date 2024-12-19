import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AuthPage from "./Pages/AuthPage";
import CompanyDetails from "./Pages/CompanyDetails";
import RegisterCompany from "./Pages/RagisterCompany";
import ProfilePage from "./Pages/ProfilePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/auth" element= {<AuthPage/>}/>
        <Route path="/:id" element= {<CompanyDetails/>}/>
        <Route path="/register" element= {<RegisterCompany/>}/>
        <Route path="/myprofile" element= {<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
