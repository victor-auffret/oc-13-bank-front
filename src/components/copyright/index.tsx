import { FunctionComponent } from 'react';
import "./index.css"

interface IProps {
}

const CopyrightComponent: FunctionComponent<IProps> = (props: IProps) => {
 return <footer className="app-footer bg-white">
  <span>
   Copyright 2020 Argent Bank
  </span>
 </footer>
}

export { CopyrightComponent }
