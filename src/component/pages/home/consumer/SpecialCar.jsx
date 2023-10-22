import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpecialCar = () => {
    const handleSpecial = e =>{
        e.preventDefault()
        toast.success("Thank you for giving message. We will contact with you as soon as possible.")
    }
  return (
    <div className=" bg-textColor md:w-2/3 w-4/5 mx-auto  ">
        <div className='p-10'>
        <h1 className='text-center font-bold text-2xl my-6'>Narrate your special car, we will create for only you</h1>
        <form onSubmit={handleSpecial} className='text-center'>
            <textarea className='rounded-sm w-4/5 p-4' name="" placeholder='Describe to making you car'  rows="10" required></textarea><br />
            <input className='my-3 rounded-sm w-4/5 h-8 p-4' type="email" placeholder='Give Your Email' required /> <br />
            <input className="mt-4 rounded-sm px-16  py-2 text-lg font-bold bg-[#DF6242] text-textColor cursor-pointer active:text-xl" type="submit" value="Submit" />
        </form>
        </div>

        <ToastContainer
            position="top-center"
            autoClose={15000}
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

export default SpecialCar