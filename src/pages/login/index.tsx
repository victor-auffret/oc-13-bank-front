import { FunctionComponent, useCallback, useEffect, useRef } from 'react';
//
import { isEmpty } from '../../utils';
import { Api, ILoginResponseOk } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hooks';
import { setToken } from '../../utils/reducers/authSlice';
//
import LogoUser from "../../assets/user.svg"
import "./index.css"

// <i className="fa fa-user-circle-o my-icon-user"></i>
const PageLogin: FunctionComponent = () => {

 const dispatch = useAppDispatch()

 const navigate = useNavigate()

 const userName = useRef<HTMLInputElement>(null)
 const pass = useRef<HTMLInputElement>(null)
 const remember = useRef<HTMLInputElement>(null)

 //const [rememberMe, setRememberMe] = useState(false)
 //const toggleRemember = useCallback(() => setRememberMe(v => !v), [])

 useEffect(() => {
  const name = globalThis.localStorage.getItem("username") ?? ""
  if (userName.current && !isEmpty(name)) {
   userName.current.value = name
  }
 }, [])

 const login = useCallback(() => {
  const name = userName?.current?.value ?? ""
  const mdp = pass?.current?.value ?? ""
  const rememberMe = remember?.current?.checked

  if (!isEmpty(name) && !isEmpty(mdp)) {

   if (rememberMe && name) {
    globalThis.localStorage.setItem("username", name)
   }

   Api.login(name, mdp).then(r => {
    if (r.status === 200) {
     console.log("login ok ", r)
     dispatch(setToken({ token: (r as ILoginResponseOk).body.token }))
     navigate("/user")
    }
    else {
     // TODO : gestion du message d erreur
     console.error(r.message)
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
      <input type="email" name="user-name" id="user-name" className="login-input full-width" ref={userName} />
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
