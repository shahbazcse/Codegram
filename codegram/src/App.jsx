import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Booksmarks from "./pages/Bookmarks";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import Login from "./components/Login/Login";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import TrendingNews from "./pages/TrendingNews";
import SingleNews from "./components/Trending/SingleNews";
import Verified from "./pages/Verified";
import About from "./pages/About";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  // store and use token from local storage to persist session state on hard refresh
  const {
    state: { token },
  } = useContext(AuthContext);

  return (
    <div>
      {token ? (
        <main className="relative max-h-screen max-w-[1400px] mx-auto">
          <Sidebar />
          <div className={`flex gap-6 xl:ml-0 md:ml-6 sm:ml-6`}>
            <section className="flex-col sm:ml-[81px] xl:ml-[340px] w-screen sm:w-[600px] min-h-screen border-x border-gray-400 text-white py-2">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/bookmarks" element={<Booksmarks />} />
                <Route path="/liked" element={<Liked />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/trending" element={<TrendingNews />} />
                <Route path="/trending/:newsId" element={<SingleNews />} />
                <Route path="/verified" element={<Verified />} />
                <Route path="/about" element={<About />} />
              </Routes>
              <div className="sm:hidden bg-gray-950 opacity-100 sticky w-screen inset-x-0 bottom-0 py-5">
                <MobileNavBar />
              </div>
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
