import loginBanner from "../assets/Codegram.gif";

export default function Login({ isLogin, setIsLogin }) {
  return (
    <div className="container max-w-full h-screen flex bg-[#16181C] relative max-w-screen max-h-screen m-auto">
      <div className="hidden xl:block">
        <img src={loginBanner} className="h-screen" alt="" />
      </div>
      <div className="flex-col m-4">
          <input type="text" className="flex p-2 m-2 rounded-sm" placeholder="Email" />
          <input type="text" className="flex p-2 m-2 rounded-sm" placeholder="Password" />
          <button className="flex p-2 ml-2 rounded-sm bg-blue-600 text-white" onClick={() => setIsLogin((isLogin) => !isLogin)}>
            Login
          </button>
      </div>
    </div>
  );
}
