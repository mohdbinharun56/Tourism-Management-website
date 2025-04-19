import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import CreateContext from './sharedComponents/CreateContext/CreateContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateContext>
      <RouterProvider router={router}></RouterProvider>
    </CreateContext>
  </StrictMode>,
)