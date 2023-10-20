import URL from "../../../url/URL"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const handleSubmit=e=>{
        e.preventDefault()
        const forFromReset = e.target
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const photo =form.get("photo")
        const brand =form.get("brand")
        const type =form.get("type")
        const description =form.get("description")
        const rating =form.get("rating")
        const price =form.get("price")

        const data = {name, photo, brand, type, description, rating, price}
        console.log(data)
        fetch(`${URL}/car`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(()=>{
            toast.success("Insert successfull")
            forFromReset.reset()
        })
    }


  return (
    <div className=" lg:w-3/5 mx-auto my-myMargin">
        <div className="bg-textColor p-10 rounded-lg text-center">
            <h1  className=" text-2xl font-medium my-mtMargin">Add A Car</h1>
            <form onSubmit={handleSubmit}>
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Car Name or, Car Model" name="name" required/><br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Photo URL of the Car" name="photo" required /> <br />
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Brand Name" name="brand" required/> <br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Car Type" name="type" required/><br/>
                <textarea  className="w-4/5 pl-5 pt-2 rounded" rows="4" placeholder="Simply Describe About the Car" name="description" required></textarea> <br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" placeholder="Car Rating" name="rating" required /><br />
                <input className="w-4/5 h-10 pl-5 rounded" type="text" placeholder="Price" name="price" required /> <br />
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

export default AddProduct