import {createBrowserRouter} from 'react-router-dom'
import Login from '../pages/LandingPage/Login'
import PrivateRoutes from './PrivateRoutes'
import HomeDash from '../pages/Dashboard/Home'
import SignUp from '../pages/LandingPage/SignUp'
import Terms from '../pages/LandingPage/Terms'

const router = createBrowserRouter([
  {

    path: '/login',
    element: <Login/>
  },
  {
    path:"/",
    element:<PrivateRoutes>
      <HomeDash/>
    </PrivateRoutes>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/terms",
    element:<Terms/>
  }
])

export default router

