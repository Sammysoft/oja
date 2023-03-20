/* eslint-disable*/

import React, { useEffect, useState, useMemo } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
// import { LoginProvider } from "./loginContext";
import UserList from "./pages/Mobile/Admin/UserList";
import ProductApprovals from "./pages/Mobile/Admin/ProductApprovals";
import Product from "./pages/Mobile/Admin/Products";
import ViewItemPage from "./pages/Mobile/Admin/ViewItemPage";
import SearchItemPage from "./pages/Mobile/SearchItemsPage";
import About from "./components/Mobile/About";
import axios from "axios";
import { api } from "./strings";
import Swal from "sweetalert2";
import { AuthContext } from "./loginContext";
import AboutPage from "./pages/Mobile/AboutPage";
import FavouritePage from "./pages/Mobile/FavouritesPage";
import MetricsPage from "./pages/Mobile/Admin/MetricsPage";

const Mobile = () => {
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
      setUser: (value) => {
        setUser(value);
      },
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
        path="/search/*"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <SearchItemPage />
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
        path="/sign-in"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <LoginPage />
          </AuthContext.Provider>
        }
      />
      <Route
        path="/items"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <ItemListPage />
          </AuthContext.Provider>
        }
      />
      <Route
        path="/item/description/*"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <ItemDescriptionPage />
          </AuthContext.Provider>
        }
      />
      <Route
        path="/dashboard"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <DashboardPage />
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
        path="/chat/*"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <ChatItem />
          </AuthContext.Provider>
        }
      />
      <Route
        path="/chats/*"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <ChatPage />
          </AuthContext.Provider>
        }
      />
      <Route
        path="/admin/users"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <UserList />
          </AuthContext.Provider>
        }
      />
      <Route
        path="/admin/products/approve"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <ProductApprovals />
          </AuthContext.Provider>
        }
      />
      <Route
        path="/admin/items"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <Product />
          </AuthContext.Provider>
        }
      />
      <Route
        path="/product/view/*"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <ViewItemPage />
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
        path="/favourites"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <FavouritePage />
          </AuthContext.Provider>
        }
      />
      <Route
        path="/metrics"
        exact
        element={
          <AuthContext.Provider value={authContext}>
            <MetricsPage />
          </AuthContext.Provider>
        }
      />
      <Route path="/*" exact element={<ErrorPage />} />
    </Routes>
  );
};

export default Mobile;
