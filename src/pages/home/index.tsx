import { FunctionComponent } from 'react';
//import { NavLink } from 'react-router-dom';
import "./index.css";

interface IProps {
}

const PageHome: FunctionComponent<IProps> = (props: IProps) => {
 return <>

  <div className="photo-plante">
   <div className="slogan">
    <h3>
     No fees. <br />
     No minimum deposit. <br />
     High interest rates. <br />
    </h3>
    <p>
     Open a savings account with Argent Bank today!
    </p>
   </div>
  </div>

  <div className="list-rond-vert">
   <div>card 1 </div>
   <div>card 2 </div>
   <div>card 3 </div>
  </div>

 </>
}

export { PageHome }
