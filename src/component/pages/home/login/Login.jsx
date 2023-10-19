import { useContext } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import URL from "../../../../url/URL";
import { MyContext } from "../../../contextApi/MyAuthProvider";

const Login = () => {
    const {createMyUser} = useContext(MyContext)
    const handleLogin = e=>{
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
    <div className=" lg:w-3/5 mx-auto my-myMargin">
        <div className="bg-textColor p-10 rounded-lg text-center">
            <h1  className=" text-2xl font-medium my-mtMargin">Login Now</h1>
            <form onSubmit={handleLogin}>
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Email" name="email" required /> <br />
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Password" name="password" required/> <br />
                <input  className="mt-4 rounded-sm px-16  py-2 text-lg font-bold bg-[#DF6242] text-textColor cursor-pointer active:text-xl" type="submit" value="Add" />
            </form>
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