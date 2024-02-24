import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import ExShoeStore from "./components/Props/ExShoeStore/ExShoeStore";
import ChangeColor from "./components/StateDemoComponent/ChangeColor";
import ChangeCar from "./components/StateDemoComponent/ChangeCar";
import clsx from "clsx";
import HeaderLayout from "./components/HeaderLayout";
import HomeTemplate from "./template/HomeTemplate";
import AuthTemplate from "./template/AuthTemplate";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PageNotFound from "./pages/auth/PageNotFound";
import Admin from "./pages/auth/Admin";
import ProductTable from "./components/ProductList/ProductTable";
const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx : => html được viết trong file js (nền js) được gọi là jsx
// 2 loại function component , class component
root.render(
  <BrowserRouter>
    {/* Những thẻ nào để ngoài Routes thì luôn luôn được load lên */}
    {/* Thẻ Navlink (của react router dom) để di chuyển giữa các trang trong react */}
    {/* isActive sẽ trả về true khi router đó đang active, ngược lại sẽ trả về false */}
    {/* Header  */}
    <Routes>
      {/*Home template  */}
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<div>Trang chủ</div>}></Route>
        <Route path="shoe-store" element={<ExShoeStore />}></Route>
        <Route path="bt-change-color" element={<ChangeColor />}></Route>
        <Route path="bt-change-car" element={<ChangeCar />}></Route>
        <Route path="bt-form" element={<ProductTable />}></Route>

      </Route>
      {/* AuthTemplate */}
      <Route path="auth" element={<AuthTemplate />}>
        <Route index element={<Login />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>
      <Route path="auth" element={<AuthTemplate />}>
        <Route path="register" element={<Register />}></Route>
      </Route>

     <Route path="admin" element={<Admin/>}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
