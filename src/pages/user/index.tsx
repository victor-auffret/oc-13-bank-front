import { FunctionComponent, useState } from 'react';
import { TransactionComponent } from '../../components/transaction';

import "./index.css"

interface IProps {
}
// <i className="fa fa-user-circle-o my-icon-user"></i>
const PageUser: FunctionComponent<IProps> = (props: IProps) => {
 const [nom, setNom] = useState("Tony Jarvis")
 return <div className="full-height fond-bleu page-user-container">

  <header className="page-user-header">
   <h2>
    Whelcome back <br /> {nom} !
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
