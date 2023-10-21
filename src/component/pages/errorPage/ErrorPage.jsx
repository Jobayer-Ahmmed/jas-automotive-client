import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="w-full h-[100vh] bg-deepGray flex justify-center items-center">
    <div className="bg-textColor md:w-2/3 h-[50vh] w-[320px]  mx-auto">
        <h1 className="text-4xl font-bold text-deepGray text-center mb-3 mt-10">404</h1>
        <h2 className="text-3xl font-semibold text-deepGray text-center">Opps!!! Page not found</h2>
        <div className="flex justify-center"><Link to="/" className="px-12 py-2 border-[2px] border-black mt-6 hover:opacity-60">Go Home</Link></div>
    </div>
    </div>
  )
}

export default ErrorPage