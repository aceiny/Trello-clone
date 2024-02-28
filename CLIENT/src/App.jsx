import BoardList from "./componants/Home/BoardList";
import Sidebar from "./componants/Home/Sidebar";
import NavBar from "./componants/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <HomePage/>
    </div>
  );
}

export default App;
