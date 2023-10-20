import { useContext } from "react"
import { MyContext } from "../../contextApi/MyAuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myAuth from "../../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";


const Register = () => {
    const {createMyUser} = useContext(MyContext)

    const handleRegsiter = e=>{
        e.preventDefault()
        const forFormReset = e.target
        const form  = new FormData(e.currentTarget)
        const email =form.get("email")
        const password = form.get("password")
        const name = form.get("name")
        const photo = form.get("photo")
        console.log(email, password)

        createMyUser(email, password)
        .then((res1)=>{
            updateProfile(myAuth.currentUser, {
                displayName: name, 
                photoURL: photo
                })
            .then((res2) => {
                console.log(res1)
                console.log(res2)
                toast.success("Congratulations! Registration successfull")
                forFormReset.reset()
              })
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))

}
  return (
    <div className="w-4/5 md:w-3/5 mx-auto my-myMargin">
        <div className="bg-textColor py-10 px-4 rounded-lg text-center">
            <h1  className=" text-2xl font-medium my-mtMargin">Registration Now</h1>
            <form onSubmit={handleRegsiter}>
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Name" name="name" required/><br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Email" name="email" required /> <br />
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Password" name="password" required/> <br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="URL of Your Photo" name="photo" required/><br/>
                <input  className="mt-4 rounded-sm px-16  py-2 text-lg font-bold bg-[#DF6242] text-textColor cursor-pointer active:text-xl" type="submit" value="Add" />
            </form>
            <p  className=" my-mtMargin">Already have an account? <Link to="/login" className="underline text-green-600">Login Now!</Link></p>

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

export default Register