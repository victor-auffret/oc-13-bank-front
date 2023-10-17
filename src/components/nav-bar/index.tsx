import { FunctionComponent, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
//
import { RootState } from '../../utils/store';
import { isEmpty } from '../../utils';
//
import LogoUser from "../../assets/user.svg"
import "./index.css"

interface IProps {
}

const NavBarComponent: FunctionComponent<IProps> = (props: IProps) => {
 const user = useSelector((state: RootState) => state.auth.user)

 const NavBarDynamique = useMemo(() => {
  if (isEmpty(user)) {
   return (<li>
    <NavLink to={'/login'} className="sign-in">
     <span>
      <img src={LogoUser} alt="sign-in" className="my-icon-user" />
     </span>
     <span>
      Sign in
     </span>
    </NavLink>
   </li>)
  }
  return (
   <>
    <li>
     <NavLink to={'/user'} className="sign-in">
      <span>
       <img src={LogoUser} alt="sign-in" className="my-icon-user" />
      </span>
      <span>
       {user?.firstName}
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
   </>

  )
 }, [user, user?.firstName, user?.lastName])

 return (<nav>
  <ul className="app-nav-bar">
   {NavBarDynamique}
  </ul>
 </nav>)
}

export { NavBarComponent }
