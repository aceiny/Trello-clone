import BoardList from './componants/Home/BoardList';
import Sidebar from './componants/Home/Sidebar';
import NavBar from './componants/NavBar';
import BoardPage from './pages/BoardPage';
import HomePage from './pages/HomePage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import { Toaster } from 'react-hot-toast';
import NotFound from './componants/NotFound.jsx';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board/:id" element={<BoardPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
