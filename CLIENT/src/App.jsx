import BoardList from './componants/Home/BoardList';
import Sidebar from './componants/Home/Sidebar';
import NavBar from './componants/NavBar';
import BoardPage from './pages/BoardPage';
import HomePage from './pages/HomePage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import { Toaster } from 'react-hot-toast';
import NotFound from './componants/NotFound.jsx';
import SecureRoutes from './config/SecureRoutes.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './store/reducers/auth.reducer.jsx';
import { useSelector } from 'react-redux';
function App() {
  const fetchErr = useSelector((state) => state.Board.fetchErr);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchErr) {
      dispatch(logout());
    }
  }, [fetchErr, dispatch]);
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SecureRoutes elem={<HomePage />} />} />
          <Route
            path="/board/:id"
            element={<SecureRoutes elem={<BoardPage />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
