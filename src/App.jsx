import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AuthPage from "./Pages/AuthPage";
import CompanyDetails from "./Pages/CompanyDetails";
import RegisterCompany from "./Pages/RagisterCompany";
import ProfilePage from "./Pages/ProfilePage";
import ProfileEditPage from "./Pages/ProfileEditPage";
import InvestmentPage from "./Pages/InvestmentPage";
import DiscussionPage from "./Pages/DiscussionPage";
import DiscussionCart from "./Components/Discussion/Offers/DiscussionCart";
import ViewProfile from "./Pages/ViewProfile";
import CommutityPage from "./Pages/CommutityPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:id" element={<CompanyDetails />} />
        <Route path="/investment/:id" element={<InvestmentPage />} />
        <Route path="/register" element={<RegisterCompany />} />
        <Route path="/myprofile" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<ViewProfile />} />
        <Route path="/edit-profile" element={<ProfileEditPage />} />
        <Route path="/discuss/" element={<DiscussionPage />}>
          <Route path="/discuss/:id" element={<DiscussionCart />} />
        </Route>
        <Route path="/community" element={<CommutityPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
