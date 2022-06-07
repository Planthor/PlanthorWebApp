import {Link} from "react-router-dom";

const LoginModal = () => {

  return (
    <div className="p-10 w-5/12 bg-white m-auto translate-y-1/4 rounded-3xl">
      <h3 className="font-extrabold text-primary-blue text-5xl text-center">Sign
        in to
        Planthor</h3>
      <form className="mt-5">
        <div className="mt-5">
          <label className="text-xl font-bold">User Name or Email
            Address</label>
          <input type="text"
            className="w-full text-black border rounded-lg border-gray-300 px-3 py-2 shadow-sm mt-2.5" />
        </div>
        <div className="mt-5">
          <label className="text-xl font-bold">Password</label>
          <input type="password"
            className="w-full text-black border rounded-lg border-gray-300 px-3 py-2 shadow-sm mt-2.5" />
        </div>
        <div className="flex items-center mt-5 justify-between">
          <div>
            <input type="checkbox" id="rememberme-check-box"
              name="rememberme-check-box"/>
            <label htmlFor="rememberme-check-box" className="ml-1">Remember me</label>
          </div>
          <Link to="#" className="text-primary-blue">Forgot your password?</Link>
        </div>
        <button
          className="w-full rounded-lg px-3 py-2 mt-5 border bg-primary-blue text-white hover:text-primary-blue hover:bg-white hover:border-primary-blue focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Sign
          In
        </button>
        <p className="mt-2 text-center">Or</p>
        <button
          className="w-full rounded-lg px-3 py-2 mt-2 bg-[#4267B2] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300">Sign
          in with Facebook
        </button>
        <div className="text-center mt-5">
          <Link to="#" className="text-primary-blue">Create an account</Link>
        </div>
      </form>
    </div>);
};

export default LoginModal;