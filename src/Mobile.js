import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Mobile/Dashboard";
import HomePage from "./pages/Mobile/HomePage";
import ItemListPage from "./pages/Mobile/ItemListPage";
import LoginPage from "./pages/Mobile/LoginPage";
import OnboardPage from "./pages/Mobile/OnboardPage";
import ItemDescriptionPage from "./pages/Mobile/ItemDescriptionPage";
import ChatPage from "./pages/Mobile/ChatPage";
import ProfilePage from "./pages/Mobile/ProfilePage";
import ErrorPage from "./pages/Mobile/ErrorPage";
import ChatItem from "./pages/Mobile/ChatItem";

const Mobile = () => {
  return (
    <Routes>
      <Route path="/chat" exact element={<ChatItem />} />
      <Route path="/" exact element={<HomePage />} />
      <Route path="/onboard" exact element={<OnboardPage />} />
      <Route path="/sign-in" exact element={<LoginPage />} />
      <Route path="/dashboard" exact element={<DashboardPage />} />
      <Route path="/items" exact element={<ItemListPage />} />
      <Route path="/product" exact element={<ItemDescriptionPage />} />
      <Route path="/chats" exact element={<ChatPage />} />
      <Route path="/profile" exact element={<ProfilePage />} />
      <Route path="/*" exact element={<ErrorPage />} />
    </Routes>
  );
};

export default Mobile;
