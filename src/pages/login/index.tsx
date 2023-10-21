import { FunctionComponent, useCallback, useMemo, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//
import type { RootState } from "../../utils/store"
import { setSavedName } from "../../utils/reducers/savedNameSlice"
import { isEmpty } from '../../utils';
//
import LogoUser from "../../assets/user.svg"
import "./index.css"
import { Api } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

interface IProps {
}
// <i className="fa fa-user-circle-o my-icon-user"></i>
const PageLogin: FunctionComponent<IProps> = (props: IProps) => {

 const navigate = useNavigate()

 const userName = useRef<HTMLInputElement>(null)
 const pass = useRef<HTMLInputElement>(null)
 const remember = useRef<HTMLInputElement>(null)

 //const [rememberMe, setRememberMe] = useState(false)
 //const toggleRemember = useCallback(() => setRememberMe(v => !v), [])

 const login = useCallback(() => {
  const name = userName?.current?.value ?? ""
  const mdp = pass?.current?.value ?? ""
  const rememberMe = remember?.current?.checked

  if (!isEmpty(name) && !isEmpty(mdp)) {
   console.log({ name, mdp, rememberMe })
   if (rememberMe && name) {
    // on garde en memoire le dernier utilisateur connecte
    console.log("save user")
   }

   Api.login(name, mdp).then(r => {
    console.log(r)
    switch (r.status) {
     case 200: {
      console.log("login ok ", r)
      // modifier authSlice 
      navigate("/user")
      break;
     }

     default: {
      console.error(r.message)
      break;
     }
    }
   })
  }
 }, [])

 return <div className="full-height fond-bleu">
  <div className="login-container">

   <img src={LogoUser} alt="icon-user" className="my-icon-user" />

   <h1 className="login-title">Sign In</h1>
   <form action="#" className="login-form">

    <div className="login-input-section">
     <label htmlFor="user-name">
      Username
      <input type="text" name="user-name" id="user-name" className="login-input full-width" ref={userName} />
     </label>
    </div>

    <div className="login-input-section">
     <label htmlFor="password">
      Password
      <input type="password" name="password" id="password" className="login-input full-width" ref={pass} />
     </label>
    </div>


    <div className="login-input-section txt-left">
     <input type="checkbox" name="remember-me" id="remember-me" ref={remember} />
     <label htmlFor="remember-me"> Remember me </label>
    </div>

    <div className="login-input-section full-width" onClick={login}>
     <div className="btn bg-green txt-surligne txt-white full-width">
      Sign In
     </div>
    </div>

   </form>
  </div>
 </div>
}

export { PageLogin }
