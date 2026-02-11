
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import RecipeVaultPage from './pages/RecipeVaultPage'
import WeatherAppPage from './pages/WeatherAppPage'
import AsukasAreena from './pages/AsukasAreena'
import PretzelWebsite from './pages/PretzelWebsite'
import CitrusCafe from './pages/CitrusCafe'
import BusinessCollegeHelsinkiProjects from './pages/BusinessCollegeHelsinkiProjects'
import ArtGalleryPage from './pages/ArtGalleryPage'
import DjangoTodoPage from './pages/DjangoTodoPage'



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
      {
        path: "/business-college-helsinki-projects",
        element: <BusinessCollegeHelsinkiProjects />
      },
      {
        path: "/art-gallery-website",
        element: <ArtGalleryPage />
      },
      {
        path: "/django-todo",
        element: <DjangoTodoPage />
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
