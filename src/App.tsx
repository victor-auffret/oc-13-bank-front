import { NavLink, Outlet } from 'react-router-dom'
import Logo from "./assets/argentBankLogo.png"
import "./index.css"

const App = () => {
  return (
    <div className="app">

      <header className="app-header bg-white">
        <span>
          <NavLink to={'/'}>
            <img className="logo-fit" src={Logo} alt={`ARGENT BANK RETOUR PAGE PRINCIPALE`} />
          </NavLink>
        </span>

        <nav>
          <ul>
            <li>
              <NavLink to={'/login'}>
                <i className="fa fa-user-circle-o my-icon-user"></i>
                sign in
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="app-footer bg-white">
        <span>
          Copyright 2020 Argent Bank
        </span>
      </footer>
    </div>
  )
}

export default App