import { FunctionComponent } from 'react';
import "./index.css"

interface IProps {
}
// <i className="fa fa-user-circle-o my-icon-user"></i>
const TransactionComponent: FunctionComponent<IProps> = (props: IProps) => {
 return <div className="transaction-container">
  <div className="transaction-infos">
   <h3>Argent Bank Checking (x8349)</h3>
   <p className="sold">$10,928.42</p>
   <p> Available Balance </p>
  </div>
  <div className="transaction-btn-container">
   <button className="btn bg-green"> View transactions  </button>
  </div>
 </div>
}

export { TransactionComponent }
