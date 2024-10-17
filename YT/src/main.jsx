import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserChannel from './Components/UserChannel.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Components/ChannelOwner/Homes.jsx'
import Videos from './Components/ChannelOwner/Videos.jsx'
import PlayLists from './Components/ChannelOwner/PlayLists.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<> <App /> </>
  },
  {
    path:"/userchannel",
    element:<> <UserChannel /> </>
  },
  {
    path:"/channel-owner-home",
    element:<> <Home /> </>
  },
  {
    path:"/channel-owner-video",
    element:<> <Videos /> </>
  },
  {
    path:"/channel-owner-playlists",
    element:<> <PlayLists /> </>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
