import { FunctionComponent, useCallback, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//
import { isEmpty } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { logOut, selectCurrentUser } from '../../utils/reducers/authSlice';
//
import LogoUser from "../../assets/user.svg"
import "./index.css"

const NavBarComponent: FunctionComponent = () => {

 const navigate = useNavigate()
 const dispatch = useAppDispatch()
 const user = useAppSelector(selectCurrentUser)

 const logout = useCallback(() => {
  dispatch(logOut())
  navigate("/login")
 }, [])

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
     <NavLink to={'/login'} className="sign-in" onClick={logout}>
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
 }, [user, user?.firstName])

 return (<nav>
  <ul className="app-nav-bar">
   {NavBarDynamique}
  </ul>
 </nav>)
}

export { NavBarComponent }
