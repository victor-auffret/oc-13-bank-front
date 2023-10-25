import { FunctionComponent, useEffect } from 'react';
import { TransactionComponent } from '../../components/transaction';
//
import { isEmpty } from '../../utils';
import { Api, IGetUserResponseOk } from '../../utils/api';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { selectCurrentToken, selectCurrentUser, setUser } from '../../utils/reducers/authSlice';
//
import "./index.css"

// <i className="fa fa-user-circle-o my-icon-user"></i>
const PageUser: FunctionComponent = () => {

 const token = useAppSelector(selectCurrentToken) ?? ""
 const dispatch = useAppDispatch()
 const user = useAppSelector(selectCurrentUser)

 useEffect(() => {
  if (!isEmpty(token)) {
   console.log("token : ", token)
   Api.getUserInfos(token).then(r => {
    console.log("get user", r)
    if (r.status === 200) {
     dispatch(setUser((r as IGetUserResponseOk).body))
    }
   })
  }
 }, [])


 return <div className="full-height fond-bleu page-user-container">

  <header className="page-user-header">
   <h2>
    Whelcome back <br /> {user?.firstName ?? "Tony"} {user?.lastName ?? "Jarvis"} !
   </h2>
   <br />
   <button className="btn bg-green">Edit name</button>
  </header>

  <section className="transactions-container">
   <TransactionComponent />
   <TransactionComponent />
   <TransactionComponent />
  </section>
 </div>
}

export { PageUser }
