/* eslint-disable */

import React, { useState, useEffect, useMemo } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Desktop/Admin/Dashboard";
import HomePage from "./pages/Desktop/HomePage";
import LoginPage from "./pages/Desktop/LoginPage";
import OnboardPage from "./pages/Desktop/OnboardPage";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/Desktop/ProfilePage";
import ProductDescriptionPage from "./pages/Desktop/ProductDescriptionPage";
import ItemListPage from "./pages/Desktop/ItemsListPage";
import ChatPage from "./pages/Desktop/ChatPage";
import SearchItems from "./pages/Desktop/SearchItems";
import Categories from "./pages/Desktop/categories";
import { api } from "./strings";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "./loginContext";
import AboutPage from "./pages/Desktop/AboutPage";
import ItemApproval from "./pages/Desktop/Admin/ItemApproval";
import ItemManage from "./pages/Desktop/Admin/ItemManage";
import ItemApprovalView from "./pages/Desktop/Admin/ItemApprovalView";

function Desktop() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [refreshToken, setToken] = useState("");
  let token = localStorage.getItem("oja-token");

  const authContext = useMemo(() => {
    return {
      getUser: user,
      setToken: (value) => {
        setToken(value);
        localStorage.setItem("oja-token", value);
      },
      _setUser:(value)=>{
        setUser(value)
      }
    };
  });
  useEffect(() => {
    if (!token) {
      setUser({});
    } else {
      axios
        .get(`${api}/dashboard`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setUser(res.data.data);
          if (res.data.data === null) {
            alert("Empty data");
          }
          if (!res.data.data.profile_picture) {
            navigate(`/profile?settings/${res.data.data._id}`);
            Swal.fire({
              icon: "warning",
              text: "Help us know you better",
              title: "Add a profile picture",
            });
          }
        })
        .catch((error) => {
          if (error.response.data === "Unauthorized") {
            localStorage.removeItem("oja-token");
            navigate("/");
          }
        });
    }
  }, [refreshToken]);


  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <HomePage />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/onboard"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <OnboardPage />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/login"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <LoginPage />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/dashboard"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <Dashboard />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/profile"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <ProfilePage />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/product/*"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <ProductDescriptionPage />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/item-list"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <ItemListPage />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/chats"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <ChatPage />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/search/*"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <SearchItems />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/categories/*"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <Categories />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/about"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <AboutPage />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/admin/item_approval"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <ItemApproval />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/admin/item_approval/*"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <ItemApprovalView />
            </AuthContext.Provider>
          }
        />
        <Route
          path="/admin/manage_items"
          exact
          element={
            <AuthContext.Provider value={authContext}>
              <ItemManage />
            </AuthContext.Provider>
          }
        />
        <Route path="/*" exact element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Desktop;
