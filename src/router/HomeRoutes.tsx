import { FC, memo } from "react";
import { Route, Routes } from 'react-router';
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRouter: FC = memo(() => {
  return (
    <Routes>
      <Route path="/home/setting" element={<Setting />} />
      <Route path="user_management" element={<UserManagement />} />
    </Routes>
  )
})