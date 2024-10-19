import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserChannel from './Components/UserChannel.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Subscription from './Components/Subscription.jsx'
import Home from './Components/Home.jsx'
import Videos from './Components/ChannelOwner/Videos.jsx'
import PlayLists from './Components/ChannelOwner/PlayLists.jsx'
import You from './Components/You.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<> <Home /> </>
  },
  {
    path:"/userchannel",
    element:<> <UserChannel /> </>
  },
  {
    path:"/subscription",
    element:<> <Subscription /> </>
  },
  {
    path:"/you",
    element:<> <You /> </>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
