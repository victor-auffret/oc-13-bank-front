import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import { router } from "./router"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Main = () => {

  //const redux = useState(true)
  //<EmployeContext.Provider value={redux}>
  //</EmployeContext.Provider>
  return <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

}

root.render(<Main />)
