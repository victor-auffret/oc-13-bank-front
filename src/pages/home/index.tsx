import { FunctionComponent } from 'react';
import { CardComponent } from "../../components/card-component"



import "./index.css";

interface IProps {
}

const PageHome: FunctionComponent<IProps> = (props: IProps) => {
 const cards = [
  {
   title: "You are our #1 priority",
   txt: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  },
  {
   title: "More savings means higher rates",
   txt: "The more you save with us, the higher your interest rate will be!"
  },
  {
   title: "Security you can trust",
   txt: "We use top of the line encryption to make sure your data and money is always safe."
  }
 ]
 return <>

  <div className="photo-plante">
   <div className="slogan">
    <p className="subtitle">No fees. </p>
    <p className="subtitle">No minimum deposit. </p>
    <p className="subtitle">High interest rates. </p>
    <br />
    <p>
     Open a savings account with Argent Bank today!
    </p>
   </div>
  </div>

  <div className="list-rond-vert">
   {cards.map((c, i) => <CardComponent key={`card-${c.title}-${i}`} id={i} title={c.title} txt={c.txt} />)}
  </div>

 </>
}

export { PageHome }
