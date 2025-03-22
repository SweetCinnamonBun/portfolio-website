
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import RecipeVaultPage from './pages/RecipeVaultPage'
import WeatherAppPage from './pages/WeatherAppPage'
import AsukasAreena from './pages/AsukasAreena'
import PretzelWebsite from './pages/PretzelWebsite'
import CitrusCafe from './pages/CitrusCafe'



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
      },
      {
        path: "/asukas-areena",
        element: <AsukasAreena />
      },
      {
        path: "/pretzel-website",
        element: <PretzelWebsite />
      },
      {
        path: "/citrus-cafe",
        element: <CitrusCafe />
      },

    ]
  }
])




function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
