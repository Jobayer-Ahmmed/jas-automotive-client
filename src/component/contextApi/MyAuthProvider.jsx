import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from "react"
import myAuth from '../../firebase/firebase.config';

const MyContext = createContext()

const MyAuthProvider = ({children}) => {
    const [myUser, setMyUser] = useState()
    const [loading, setLoading] = useState(true)

    const createMyUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(myAuth, email, password)
    }

    const info = {
        myUser,
        loading,
        createMyUser,
    }

  return (
    <MyContext.Provider value={info}>
        {children}
    </MyContext.Provider>
  )
}
MyAuthProvider.propTypes={
    children:PropTypes.node
}
export default MyAuthProvider
export {MyContext}