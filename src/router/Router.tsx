import { FC, memo } from "react";
import { Route, Routes } from "react-router";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { HeaderLayout } from "../components/template/HeaderLayout";

export const Router: FC = memo(() => {
  return (
      <HeaderLayout>
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home">
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="user_management" element={<UserManagement />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      
    </Routes>
      </HeaderLayout>
  )
})