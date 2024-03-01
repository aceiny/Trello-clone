import BoardList from "./componants/Home/BoardList";
import Sidebar from "./componants/Home/Sidebar";
import NavBar from "./componants/NavBar";
import BoardPage from "./pages/BoardPage";
import HomePage from "./pages/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
