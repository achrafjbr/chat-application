import { useState } from "react";
import SinginPage from "../pages/authentication/SinginPage";
import SingupPage from "../pages/authentication/SingupPage";
import { MessageSquareMore } from "lucide-react";

export default function AuthTabs() {
  const tabs: Record<string, React.JSX.Element> = {
    singin: SinginPage(),
    singup: SingupPage(),
  };

  const [selectedTab, setSelectedTab] = useState(tabs["singin"]);

  return (
    <div>
      <div className="flex  flex-col justify-center items-center gap-2.5 pb-5">
        <MessageSquareMore color="blue" size={60} />
        <p className="text-2xl font-bold tracking-wide text-wrap text-center truncate ">
          Welcome to ECHO chat
        </p>

        <p className="text-sm text-gray-400 font-normal text-wrap text-center truncate ">
          Real-time conversations secure messaging & friend network
        </p>
      </div>
      <div className="rounded-2xl p-1 border border-gray-200 bg-gray-50">
        <div className="flex items-center justify-around transform ">
          <button
            onClick={() => setSelectedTab(tabs["singin"])}
            className={`cursor-pointer rounded-lg text-xs font-semibold  text-white text-center 
              ${selectedTab == tabs["singin"] && "bg-blue-400 px-10 md:px-13 py-1 transition-all duration-100"}`}
          >
            Sing In
          </button>

          <button
            onClick={() => setSelectedTab(tabs["singup"])}
            className={`cursor-pointer rounded-lg  text-xs font-semibold text-white text-center 
              ${selectedTab == tabs["singup"] && "bg-blue-400 px-10 md:px-13 py-1 transition-colors duration-100"}`}
          >
            Sing Up
          </button>
        </div>
      </div>
      <div className="pt-15">{selectedTab}</div>
    </div>
  );
}
