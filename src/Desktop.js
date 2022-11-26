import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Desktop/Dashboard";
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

function Desktop() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/onboard" exact element={<OnboardPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/profile" exact element={<ProfilePage />} />
        <Route path="/product" exact element={<ProductDescriptionPage />} />
        <Route path="/item-list" exact element={<ItemListPage />} />
        <Route path="/chats" exact element={<ChatPage />} />
        <Route path="/search/*" exact element={<SearchItems />} />
        <Route path="/categories/*" exact element={<Categories />} />
        <Route path="/*" exact element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Desktop;
