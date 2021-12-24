import { useAuth } from "hooks/useAuth";
import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import Register from "pages/Register";
import Page2 from "pages/Page2";
import ForgotPassword from "pages/ForgotPassword";
import PasswordReset from "pages/PasswordReset";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:token" element={<PasswordReset />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/page-2" element={<Page2 />} />
    </Routes>
  );
}

export default App;
