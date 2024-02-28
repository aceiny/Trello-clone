import BoardList from "./componants/Home/BoardList";
import Sidebar from "./componants/Home/Sidebar";
import NavBar from "./componants/NavBar";
import BoardPage from "./pages/BoardPage";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <BoardPage/>
    </div>
  );
}

export default App;
