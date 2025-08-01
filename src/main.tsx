import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import './App.css'
import AuthProvider from './Context/AuthProvider';
import { routes } from './Router/Routes';


const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>,
)
