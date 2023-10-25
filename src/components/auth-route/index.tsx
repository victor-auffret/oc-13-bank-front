import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//
import { isEmpty } from '../../utils';
import { useAppSelector } from '../../utils/hooks';
import { selectCurrentToken } from '../../utils/reducers/authSlice';

interface IProps {
 children: any,
 redirect: string
}

const AuthRouteComponent: FunctionComponent<IProps> = (props: IProps) => {
 const navigate = useNavigate()
 const [ok, setOk] = useState<boolean>(false)
 const token = useAppSelector(selectCurrentToken)

 useEffect(() => {
  if (isEmpty(token)) {
   setOk(false)
   navigate(props.redirect)
  } else {
   setOk(true)
  }
 }, [token])

 return <>
  {ok ? props.children : null}
 </>
}

export { AuthRouteComponent }
