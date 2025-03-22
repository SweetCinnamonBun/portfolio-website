
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import RecipeVaultPage from './pages/RecipeVaultPage'
import WeatherAppPage from './pages/WeatherAppPage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/recipe-vault",
        element: <RecipeVaultPage />
      },
      {
        path: "/country-details",
        element: <WeatherAppPage />
      }
    ]
  }
])




function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
