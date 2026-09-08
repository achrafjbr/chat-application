import { useState } from "react";
import SinginPage from "../pages/authentication/SinginPage";
import SingupPage from "../pages/authentication/SingupPage";
import { MessageSquareMore } from "lucide-react";

export default function AuthTabs() {
  const tabs = {
    singin: "singin",
    singup: "singup",
  };

  const [selectedTab, setSelectedTab] = useState(tabs.singin);

  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-center gap-2.5 pb-5">
        <MessageSquareMore color="blue" size={60} />
        <p className="text-2xl font-bold tracking-wide text-wrap text-center truncate ">
          {tabs.singin ? "Welcome to Doo chat" : "Create an Account"}
        </p>

        <p className="text-sm text-gray-400 font-normal text-wrap text-center truncate ">
          {tabs.singin
            ? "Sign in to access your real-time private conversations"
            : "Join the chat community and connect in real time"}
        </p>
      </div>
      <div className="rounded-xl p-1 border border-gray-200 bg-gray-50">
        <div className="flex items-center justify-around transform  ">
          <button
            onClick={() => setSelectedTab(tabs.singin)}
            className={`cursor-pointer rounded-lg text-gray-500 text-xs font-semibold  text-center 
              ${selectedTab == tabs.singin && "bg-blue-500  text-white px-10 md:px-13 py-1 transition-all duration-300"}`}
          >
            Sing In
          </button>

          <button
            onClick={() => setSelectedTab(tabs.singup)}
            className={`cursor-pointer rounded-lg text-gray-500  text-xs font-semibold text-center 
              ${selectedTab == tabs.singup && "bg-blue-500 text-white px-10 md:px-13 py-1 transition-all duration-300"}`}
          >
            Sing Up
          </button>
        </div>
      </div>
      <div className="pt-15">
        {selectedTab == tabs.singin ? <SinginPage /> : <SingupPage />}
      </div>
    </div>
  );
}
