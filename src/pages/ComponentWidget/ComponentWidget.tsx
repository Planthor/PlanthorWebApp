export default function ComponentWidget() {
  return (
    <div>
      <h1>This is an ComponentWidget Page</h1>
      <h2>
        Login Component
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <p>Sign in to Planthor</p>
          <div>
            <label>User Name or Email Address</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Password</label>
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
        </div>
      </h2>
    </div>
  );
}