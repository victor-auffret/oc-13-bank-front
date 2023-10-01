import { FunctionComponent } from 'react';
//import { NavLink } from 'react-router-dom';
import "./index.css"

interface IProps {
}

const PageLogin: FunctionComponent<IProps> = (props: IProps) => {
 return <div className="full-height fond-bleu">
  <div className="login-container">
   <i className="fa fa-user-circle-o my-icon-user"></i>
   <h1 className="login-title">Sign In</h1>
   <form action="#" className="login-form">

    <div className="login-input-section">
     <label htmlFor="user-name">
      Username
      <input type="text" name="user-name" id="user-name" />
     </label>
    </div>

    <div className="login-input-section">
     <label htmlFor="password">
      Password
      <input type="password" name="password" id="password" className="login-input full-width" />
     </label>
    </div>


    <div className="login-input-section txt-left">
     <input type="checkbox" name="remember-me" id="remember-me" />
     <label htmlFor="remember-me"> Remember me </label>
    </div>

    <div className="login-input-section full-width">
     <div className="btn bg-green txt-surligne txt-white full-width">
      Sign In
     </div>
    </div>

   </form>
  </div>
 </div>
}

export { PageLogin }
