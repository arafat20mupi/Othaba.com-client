
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Router/Router.jsx'
import { RouterProvider } from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import {  HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster />
    </HelmetProvider>

  </AuthProvider>,
)
