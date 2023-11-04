import { FunctionComponent, useEffect, useState } from 'react'
//
import { FormatSold } from '../../utils/format-sold'
//
import "./index.css"

interface IProps {
}
// <i className="fa fa-user-circle-o my-icon-user"></i>
const TransactionComponent: FunctionComponent<IProps> = (props: IProps) => {
 const [name, setName] = useState("")
 const [multiplier, setMultiplier] = useState(0)
 const [sold, setSold] = useState(0)
 const [balance, setBalance] = useState("")

 useEffect(() => {
  // call api 
  setName("Argent Bank Checking")
  setMultiplier(Math.trunc(Math.random() * 10_000))
  setSold(Math.trunc(Math.random() * 100_000_000))
  setBalance("Available Balance")
 }, [])

 return <div className="transaction-container">
  <div className="transaction-infos">
   <h3 className="info-transaction">{name ?? "Argent Bank Checking"} (x{multiplier})</h3>
   <p className="sold">{FormatSold(sold)}</p>
   <p className="info-transaction"> {balance ?? "Current Balance"} </p>
  </div>
  <div className="transaction-btn-container">
   <button className="btn bg-green"> View transactions  </button>
  </div>
 </div>
}

export { TransactionComponent }
