import { FunctionComponent, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//
import type { RootState } from "../../utils/store"
import { setSavedName } from "../../utils/reducers/savedNameSlice"
import { isEmpty } from '../../utils';
//
import LogoUser from "../../assets/user.svg"
import "./index.css"

interface IProps {
}
// <i className="fa fa-user-circle-o my-icon-user"></i>
const PageLogin: FunctionComponent<IProps> = (props: IProps) => {
 const savedName = useSelector((state: RootState) => state.savedName)
 const dispatch = useDispatch()

 const userName = useRef<HTMLInputElement>(null)
 const pass = useRef<HTMLInputElement>(null)
 const rememberMe = useRef<HTMLInputElement>(null)

 const login = useCallback(() => {
  const name = userName?.current?.value
  const mdp = pass?.current?.value
  const remember = Boolean(rememberMe?.current?.value)
  if (!isEmpty(name) && !isEmpty(mdp)) {
   console.log({ name, mdp, remember })

   if (remember && name) {
    // on garde en memoire le dernier utilisateur connecte
    dispatch(setSavedName(name))
   }
   // envoie au serveur 
   // recuperation de la reponse
   // redirection vers la page user/profil ou indication des erreurs
   // 
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
      <input type="text" name="user-name" id="user-name" className="login-input full-width" value={savedName} ref={userName} />
     </label>
    </div>

    <div className="login-input-section">
     <label htmlFor="password">
      Password
      <input type="password" name="password" id="password" className="login-input full-width" ref={pass} />
     </label>
    </div>


    <div className="login-input-section txt-left">
     <input type="checkbox" name="remember-me" id="remember-me" ref={rememberMe} />
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
