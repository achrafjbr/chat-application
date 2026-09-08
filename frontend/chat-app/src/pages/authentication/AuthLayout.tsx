import AuthTabs from "../../componenets/AuthTabs";

export default function AuthLayout() {
  return (
    <div className="bg-linear-30 from-blue-500 to-blue-700 min-h-screen flex items-center justify-center">
      <div className="bg-white text-black shadow-2xl rounded-lg  my-3.5 w-1/3 p-5  ">
        <AuthTabs />
      </div>
    </div>
  );
}
