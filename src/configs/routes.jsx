import { NotFound } from '@/pages/404/NotFound'
import { Analytics } from '@/pages/Analytics/Analytics'
import { Campaign } from '@/pages/Campaign/Campaign'
import { Home } from '@/pages/Home/Home'
import { Influencer } from '@/pages/Influencer/Influencer'
import { Settings } from '@/pages/Settings/Settings'

export const routes = [
  {
    path: '/',
    element: <Home />,
    children: [],
  },
  {
    path: '/campaign',
    element: <Campaign />,
    children: [],
  },
  {
    path: '/influencer',
    element: <Influencer />,
    children: [],
  },
  {
    path: '/analytics',
    element: <Analytics />,
    children: [],
  },
  {
    path: '/settings',
    element: <Settings />,
    children: [],
  },
  {
    path: '*',
    element: <NotFound />,
    children: [],
  },
]
