import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AuthPage from "./Pages/AuthPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/auth" element= {<AuthPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
