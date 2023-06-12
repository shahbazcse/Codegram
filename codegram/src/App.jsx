import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Booksmarks from "./pages/Bookmarks";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [isLogin,setIsLogin] = useState(false);
  return (
    <div>
      {isLogin ? (
        <main className="relative max-w-[1400px] mx-auto">
          <Sidebar isLogin={isLogin} setIsLogin={setIsLogin} />
          <div className="flex gap-6">
            <section className="sm:ml-[81px] xl:ml-[340px] w-[600px] min-h-screen border-r border-gray-400 text-white py-2">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/bookmarks" element={<Booksmarks />} />
                <Route path="/liked" element={<Liked />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </section>
            <RightSidebar />
          </div>
        </main>
      ) : (
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
