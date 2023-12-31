import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './component/routes/Route'
import MyAuthProvider from './component/contextApi/MyAuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyAuthProvider>
      <RouterProvider router={routes}/>
    </MyAuthProvider>
  </React.StrictMode>,
)
