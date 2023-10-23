import { useContext, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../contextApi/MyAuthProvider";
import URL from "../../../url/URL";
import { useEffect } from "react";


const Login = () => {
    const { myLogin, googleLogin} = useContext(MyContext)
    const [message, setMessage] = useState('')
    const [emails, setEmails] = useState([])
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`${URL}/user`)
        .then(res=>res.json())
        .then((data)=>{
            setEmails(data)
        })
    },[])

    const handleGoogle=()=>{
        googleLogin()
        .then((res)=>{
          console.log(res)
          toast.success("You have logged with Google successfully")
        })
        .catch(err=>console.log(err.message))
    }

    const handleLogin=(e)=>{
        e.preventDefault()
        const myForm = new FormData(e.currentTarget)
        const email = myForm.get("email")
        const password = myForm.get("password")

        const findEmail = emails.find(emailObj=> emailObj.email===email)
        const getEmail = findEmail?.email

        setMessage('')

        if(getEmail){
            myLogin(email, password)
            .then(()=>{
                toast.success("Login Successfull")
                navigate(location?.state ? location?.state: '/')
            })
            .catch(()=>setMessage("Invalid password"))
        }
        else{
            setMessage("Invalid Email")
        }

    }

  return (
    <div className="w-4/5 md:w-3/5 mx-auto my-myMargin">
        <div className="bg-textColor py-10 px-4 rounded-lg text-center">
            <h1  className=" text-2xl font-medium my-mtMargin">Login Now</h1>
            <h3  className="text-red-500 text-xl my-mtMargin">{message}</h3>
            <form onSubmit={handleLogin}>
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Email" name="email" required /> <br />
                <input className="w-4/5 h-10 pl-5 rounded" type="password" placeholder="Password" name="password" required/> <br />
                <input  className="mt-4 rounded-sm px-16  py-2 text-lg font-bold bg-[#DF6242] text-textColor cursor-pointer active:text-xl" type="submit" value="Login" />
            </form>
            <p  className=" my-mtMargin">Don&apos;t have an account? <Link to="/register" className="underline text-green-600">Register Now!</Link></p>
            <p className="underline cursor-pointer" onClick={handleGoogle}>Login with Google</p>
        </div>


        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    </div>
  )
}

export default Login