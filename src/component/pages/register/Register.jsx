import { useContext } from "react"
import { MyContext } from "../../contextApi/MyAuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import URL from "../../../url/URL";

const Register = () => {
    const {createMyUser} = useContext(MyContext)
    const handleRegsiter = e=>{
        e.preventDefault()
        const forFormReset = e.target
        const form  = new FormData(e.currentTarget)
        const email =form.get("email")
        const password = form.get("password")
        console.log(email, password)
        const data = {email, password}

        createMyUser(email, password)
            .then(()=>{
                fetch(`${URL}/user`,{
                    method:"POST",
                    headers:{"content-type" : "application/json"},
                    body:JSON.stringify(data)
                })
                 .then((res2)=>res2.json())
                 .then(data=>{
                    console.log(data)
                    toast.success("Regsitration successfull")
                 })
            })
            .catch(err=>console.log(err))

        forFormReset.reset()
        
    }
  return (
    <div className="w-1/3 mx-auto bg-gray-100">
        <h1>Register now!</h1>
        <form onSubmit={handleRegsiter}>
            <input type="email" name="email" placeholder="Email" id="" /> <br />
            <input type="password" name="password" placeholder="Password" id="" /> <br />
            <input type="submit" value={`Register`} className="btn btn-accent"/>
        </form>

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

export default Register