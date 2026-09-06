import { Route, Routes } from "react-router-dom";
import AuthLayout from "../pages/authentication/AuthLayout";
import SinginPage from "../pages/authentication/SinginPage";
import SingupPage from "../pages/authentication/SingupPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} />
      {/* <Route path="login" element={<SinginPage />} />
      <Route path="register" element={<SingupPage />} /> */}
    </Routes>
  );
}

export default AppRouter;
