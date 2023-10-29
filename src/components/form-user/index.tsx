import { FunctionComponent, useCallback, useRef } from 'react';
//
import { isEmpty } from '../../utils';
import { Api, ISetUserResponseOk } from '../../utils/api';
import { selectCurrentToken, setUser } from '../../utils/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
//
import "./index.css"

interface IProps {
 closeModale: () => void
}
// <i className="fa fa-user-circle-o my-icon-user"></i>
const FormUserComponent: FunctionComponent<IProps> = (props: IProps) => {

 const token = useAppSelector(selectCurrentToken) ?? ""
 const dispatch = useAppDispatch()

 const firstName = useRef<HTMLInputElement>(null)
 const lastName = useRef<HTMLInputElement>(null)

 const annuler = useCallback(() => {
  props.closeModale()
 }, [])

 const sauvegarder = useCallback(() => {
  const prenom = firstName.current?.value ?? ""
  const nom = lastName.current?.value ?? ""
  if (!isEmpty(prenom) && !isEmpty(nom)) {
   Api.setUserInfos(token, prenom, nom).then(r => {
    if (r.status === 200) {
     // tout va bien, on dispatch dans redux le setUser
     console.log("set user ::::: =>", r)
     dispatch(setUser((r as ISetUserResponseOk).body))
     // on ferme la modale
     props.closeModale()
    } else {
     // gestion de l'erreur
     console.log("erreur ???")
    }
   })
  }
 }, [])

 return <div className="form-user-container">
  <form onSubmit={e => { e.preventDefault(); sauvegarder() }}>

   <label htmlFor="firstName">First Name : </label>
   <input type="text" name="firstName" id="firstName" ref={firstName} />

   <br />

   <label htmlFor="lastName">Last Name : </label>
   <input type="text" name="lastName" id="lastName" ref={lastName} />

   <br />

   <button onClick={annuler}>Annuler</button>
   <button type="submit">Sauvegarder</button>
  </form>
 </div>
}

export { FormUserComponent }
