import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import ProfileContainer from "./containers/ProfileContainer";
import Articles from "./components/Articles";
import Article from "./components/Article";
import AddArticle from "./Forms/AddArticles";
import Date from "./components/Date";

// Layouts
import Layout from "./Layouts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ProfileContainer/>}/>
          <Route path="posts" element={<Articles/>}/>
          <Route path="posts/:id" element={<Article/>}/>
          <Route path="posts/new" element={<AddArticle/>}/>
          <Route path="date/:date" element={<Date/>}/>
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
