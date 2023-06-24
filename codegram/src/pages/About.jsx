import shahbaz from "../assets/avatars/shahbaz.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function About() {
  return (
    <div className="sticky top-0 text-center justify-between px-4 py-2">
      <h1 className="font-medium text-[20px]">About</h1>
      <div className="flex-col bg-[#16181C] rounded-[20px] text-white mt-4 p-4">
        <div className="bg-black rounded-[20px] text-white text-center px-4 py-4 pb-6 mb-4">
          <p className="font-bold underline underline-offset-8 text-xl mx-36 mb-6">
            About Codegram
          </p>
          <div className="flex-col text-slate-400 text-left">
            <p className="mb-3">
              Codegram is a social media app made using React and mock
              backend.
            </p>
            <p className="mb-3">
              The source code is available on{" "}
              <a
                href="https://github.com/shahbazcse/Codegram"
                target="_black"
                className="underline text-blue-500"
              >
                Github
              </a>
              .
            </p>
            <p>Feel free to use the code and design.</p>
          </div>
        </div>
        <div className="bg-black rounded-[20px] text-white py-4 px-4">
          <div className="flex items-center justify-evenly p-1 mb-6 mx-[20%] rounded-full underline underline-offset-8">
            <div className="font-bold text-xl pl-1">
              Connect with <span className="text-blue-500">Shahbaz</span>
            </div>
            <img
              src={shahbaz}
              alt=""
              className="flex h-16 w-16 ml-3 rounded-full border-2 hover:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/shahbazcse" target="_blank">
              <GitHubIcon
                fontSize="large"
                className=" hover:text-slate-500 cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/shahbazcse/" target="_blank">
              <LinkedInIcon
                fontSize="large"
                className=" hover:text-blue-500 cursor-pointer"
              />
            </a>
            <a href="https://twitter.com/shahbaz_cse" target="_blank">
              <TwitterIcon
                fontSize="large"
                className=" hover:text-blue-300 cursor-pointer"
              />
            </a>
          </div>
          <div className="mt-4">
            Shahbaz Ahmad © 2023
          </div>
        </div>
      </div>
    </div>
  );
}
