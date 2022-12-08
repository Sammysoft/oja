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
import { LoginProvider } from "./loginContext";
import UserList from "./pages/Mobile/Admin/UserList";
import ProductApprovals from "./pages/Mobile/Admin/ProductApprovals";
import Product from "./pages/Mobile/Admin/Products";

const Mobile = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <LoginProvider>
            <HomePage />
          </LoginProvider>
        }
      />
      <Route
        path="/onboard"
        exact
        element={
          <LoginProvider>
            <OnboardPage />
          </LoginProvider>
        }
      />
      <Route
        path="/sign-in"
        exact
        element={
          <LoginProvider>
            <LoginPage />
          </LoginProvider>
        }
      />
      <Route
        path="/items"
        exact
        element={
          <LoginProvider>
            <ItemListPage />
          </LoginProvider>
        }
      />
      <Route
        path="/product"
        exact
        element={
          <LoginProvider>
            <ItemDescriptionPage />
          </LoginProvider>
        }
      />
      <Route
        path="/dashboard"
        exact
        element={
          <LoginProvider>
            <DashboardPage />
          </LoginProvider>
        }
      />
      <Route
        path="/profile"
        exact
        element={
          <LoginProvider>
            <ProfilePage />
          </LoginProvider>
        }
      />
      <Route
        path="/chat"
        exact
        element={
          <LoginProvider>
            <ChatItem />
          </LoginProvider>
        }
      />
      <Route
        path="/chats"
        exact
        element={
          <LoginProvider>
            <ChatPage />
          </LoginProvider>
        }
      />
      <Route
        path="/admin/users"
        exact
        element={
          <LoginProvider>
            <UserList />
          </LoginProvider>
        }
      />
      <Route
        path="/admin/products/approve"
        exact
        element={
          <LoginProvider>
            <ProductApprovals />
          </LoginProvider>
        }
      />
      <Route
        path="/admin/items"
        exact
        element={
          <LoginProvider>
            <Product />
          </LoginProvider>
        }
      />
      <Route path="/*" exact element={<ErrorPage />} />
    </Routes>
  );
};

export default Mobile;
