import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { routes } from './routes.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <Auth0Provider
    domain="manaia-2023-maddy.au.auth0.com"
    clientId="TzUmnHUfwphpC1VZHLIi3rpKVSElXW5R"
    useRefreshTokens
    cacheLocation="localstorage"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://TravelGram/api',
    }}
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Auth0Provider>
)

