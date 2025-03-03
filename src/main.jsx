import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Login from './Pages/Login';
import Signp from './Pages/Signp.jsx';
import About from './Pages/About.jsx';
import Welcome from './Pages/Userhome.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  {path:"/signup",element:<Signp/>},
  { path: "/about", element: <About /> },
  { path: "/welcome", element: <Welcome /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
