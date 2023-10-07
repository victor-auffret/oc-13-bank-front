import { Link, Outlet } from 'react-router-dom'
import Logo from "./assets/argentBankLogo.png"

import "./index.css"
import { NavBarComponent } from './components/nav-bar'
import { CopyrightComponent } from './components/copyright'
// <i className="fa fa-user-circle-o my-icon-user"></i> 
const App = () => {
  return (
    <div className="app">

      <header className="app-header bg-white">
        <span>
          <Link to={'/'}>
            <img className="logo-bank" src={Logo} alt={`ARGENT BANK RETOUR PAGE PRINCIPALE`} />
          </Link>
        </span>

        <NavBarComponent />

      </header>

      <main id="main">
        <Outlet />
      </main>

      <CopyrightComponent />
    </div>
  )
}

export default App