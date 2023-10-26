import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './App.jsx'
import CAH from './components/cah/Page.jsx'
import CAHCardCreator from './components/cah/CardCreator.jsx'
import Trunfo from './components/trunfo/Page.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cah", element: <CAH /> },
    { path: "/cah/card-creator", element: <CAHCardCreator /> },
    { path: "/trunfo", element: <Trunfo /> },
  ],{basename: import.meta.env.DEV ? '/' : '/Game.Industry/'});

  
ReactDOM.createRoot(document.getElementById('root')).render(
  import.meta.env.DEV ? <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode> : <RouterProvider router={router} />,

)
