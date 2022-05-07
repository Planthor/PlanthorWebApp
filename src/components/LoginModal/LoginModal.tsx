function LoginModal() {
  return (
    <div className="p-10">
      <p className="font-extrabold text-primary-blue text-5xl">Sign in to Planthor</p>
      <div>
        <label className="text-3xl font-bold">User Name or Email Address</label>
        <input type="text"></input>
      </div>
      <div>
        <label className="text-3xl font-bold">Password</label>
        <input type="password"></input>
      </div>
      <div>
        <input type="checkbox" id="rememberme-check-box" name="rememberme-check-box"></input>
        <label htmlFor="rememberme-check-box">Remember me</label>
      </div>
      <a>Forgot your password?</a>
      <button className="px-1 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Sign In</button>
      <p>Or</p>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300">Sign in with Facebook</button>
      <a>Create an account</a>
    </div>);
}

export default LoginModal;