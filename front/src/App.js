import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// components
import ProfileContainer from "./containers/ProfileContainer";
import UsersContainer from "./containers/UsersContainer";
import ArticlesContainer from "./containers/ArticlesContainer";
import AddArticle from "./Forms/AddArticles";
import Date from "./components/Date";
import Article from "./components/Article";

// Layouts
import Layout from "./Layouts";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<div>main page </div>}/>
          <Route path="posts" element={<ArticlesContainer/>}/>
          <Route path="posts/:id" element={<Article/>}/>
          <Route path="posts/new" element={<AddArticle/>}/>
          <Route path="users" element={<UsersContainer/>}/>
          <Route path="users/:id" element={<ProfileContainer/>}/>
          <Route path="date/:date" element={<Date/>}/>
          <Route path='*' element={<div>404</div>}/>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
