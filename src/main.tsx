import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import AppVite from './AppVite.tsx';
import App from './App.tsx';
import './index.css';
import { account } from './libs/appwrite.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppVite />,
  },
  {
    path: "app",
    element: <App />,
    // errorElement: <ErrorPage />,
    errorElement: <div>Error</div>,
  },
  {
    path: "contacts/:contactId",
    element: <App />,
  },
  {
    path: "protected",
    element: <App />,
    loader: async () => {
      try {
        // logged in? pass user to the route
        const user = await account.get();
        return { user };
      }
      catch {
        // not logged in? redirect to login
        throw redirect('/login')
      }
    }
  },
  {
    path: "login",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);