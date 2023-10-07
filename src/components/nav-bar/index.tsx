import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import LogoUser from "../../assets/user.svg"
import "./index.css"

interface IProps {
}

const NavBarComponent: FunctionComponent<IProps> = (props: IProps) => {

 return (<nav>
  <ul className="app-nav-bar">
   <li>
    <NavLink to={'/login'} className="sign-in">
     <span>
      <img src={LogoUser} alt="sign-in" className="my-icon-user" />
     </span>
     <span>
      Sign in
     </span>
    </NavLink>
   </li>
   <li>
    <NavLink to={'/'} className="sign-in">
     <span>
      <i className="fa fa-sign-out" style={{ color: "#000" }} aria-hidden="true"></i>
     </span>
     <span>
      Sign Out
     </span>
    </NavLink>
   </li>
  </ul>
 </nav>)
}

export { NavBarComponent }
