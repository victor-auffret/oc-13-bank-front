import { FunctionComponent } from 'react';
import LogoBlabla from "../../assets/icon-chat.png"
import LogoMoney from "../../assets/icon-money.png"
import LogoShield from "../../assets/icon-security.png"

import "./index.css"

interface IProps {
 title: string,
 txt: string,
 id: number
}

const LOGOS = [LogoBlabla, LogoMoney, LogoShield]

const CardComponent: FunctionComponent<IProps> = (props: IProps) => {

 return <div className="card-container">
  <div className="rond-vert">
   <img src={LOGOS[props.id]} className="logo-rond-vert" />
  </div>
  <br />
  <h4>{props.title}</h4>
  <br />
  <p className="txt">
   {props.txt}
  </p>
 </div>
}

export { CardComponent }