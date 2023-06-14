import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Booksmarks from "./pages/Bookmarks";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import Login from "./components/Login";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn ? (
        <main className="relative max-w-[1400px] mx-auto">
          <Sidebar />
          <div className="flex gap-6 xl:ml-0 md:ml-6 sm:ml-6">
            <section className="sm:ml-[81px] xl:ml-[340px] w-[600px] min-h-screen border-x border-gray-400 text-white py-2">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/bookmarks" element={<Booksmarks />} />
                <Route path="/liked" element={<Liked />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </section>
            <RightSidebar />
          </div>
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
