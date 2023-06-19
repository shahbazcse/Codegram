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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Mockman from "mockman-js";
import TrendingNews from "./pages/TrendingNews";
import SingleNews from "./components/Trending/SingleNews";
import Verified from "./pages/Verified";

const isMock = window.location.pathname === "/mockman";

function App() {
  const {
    state: { token },
  } = useContext(AuthContext);

  const [drawer, setDrawer] = useState(false);

  return (
    <div>
      {token ? (
        <main className="relative max-h-screen max-w-[1400px] mx-auto">
          <Sidebar drawer={drawer} setDrawer={setDrawer} />
          <div
            className={`flex gap-6 ${
              drawer && "ml-[100px]"
            } xl:ml-0 md:ml-6 sm:ml-6`}
            style={{ transition: `${drawer && "margin-left 0.5s"}` }}
          >
            <section className="sm:ml-[81px] xl:ml-[340px] w-[600px] min-h-screen border-x border-gray-400 text-white py-2">
              <Routes>
                <Route
                  path="/"
                  element={<Home drawer={drawer} setDrawer={setDrawer} />}
                />
                <Route path="/explore" element={<Explore />} />
                <Route path="/bookmarks" element={<Booksmarks />} />
                <Route path="/liked" element={<Liked />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/trending" element={<TrendingNews />} />
                <Route path="/trending/:newsId" element={<SingleNews />} />
                <Route path="/verified" element={<Verified />} />
              </Routes>
            </section>
            <RightSidebar />
          </div>
        </main>
      ) : !isMock ? (
        <>
          <Login />
        </>
      ) : (
        <Mockman />
      )}
    </div>
  );
}

export default App;
