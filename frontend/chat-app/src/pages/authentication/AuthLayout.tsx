import AuthTabs from "../../componenets/AuthTabs";

export default function AuthLayout() {
  return (
    <div className="bg-linear-30 from-blue-500 to-blue-700 h-screen flex items-center justify-center">
      <div className="bg-black shadow-2xl rounded-lg  w-1/2 p-5  ">
        <AuthTabs />
      </div>
    </div>
  );
}
