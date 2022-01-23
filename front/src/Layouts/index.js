import React from 'react'
import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/posts/new">Add articles</Link>
          </li>
          <li>
            <Link to="/posts">Articles</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout
