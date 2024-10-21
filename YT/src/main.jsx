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
import History from './Components/History.jsx'
import Playlist from './Components/Playlist.jsx'
import Player from './Components/Player.jsx'//Delete this later

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
  {
    path:"/history",
    element:<> <History /> </>
  },
  {
    path:"/playlist",
    element:<> <Playlist /> </>
  },
  {
    path:"/userchannel",
    element:<> <UserChannel /> </>
  },
  {
    path:"/player",
    element:<> <Player /> </>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
