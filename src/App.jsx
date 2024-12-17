import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AuthPage from "./Pages/AuthPage";
import Company from "./Components/Company/Company";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/auth" element= {<AuthPage/>}/>
        <Route path="/:id" element= {<Company/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
