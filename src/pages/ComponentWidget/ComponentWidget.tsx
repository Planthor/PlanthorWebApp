export default function ComponentWidget() {
  return (
    <div>
      <h1>This is an ComponentWidget Page</h1>
      <div>
        <h2>
          Login Component
        </h2>
        <div className="max-w-sm mx-auto bg-white rounded-xl sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <p className="text-primary-blue text-5xl font-bold">Sign in to Planthor</p>
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
        </div>
      </div>

      <div>
        <h2>
          Buttons
        </h2>
        <button>Sign in</button>
        <button>Sign in with Facebook</button>
      </div>

      <div>
        <h2>
          Forms
        </h2>
        <input type="text" placeholder="Normal"></input>
        <input type="text" placeholder="Active"></input>
        <input type="text" placeholder="Alert"></input>
        <input type="text" placeholder="Goal Name..."></input>
        <input type="text" placeholder="Goal Name"></input>
        <input type="checkbox" id="demo-unchecked-box" name="demo-unchecked-box"></input>
        <label htmlFor="demo-unchecked-box">Remember me</label>
        <input type="checkbox" id="demo-checked-box" name="demo-checked-box" checked></input>
        <label htmlFor="demo-checked-box">Remember me</label>
      </div>

      <div>
        <h2>
          Icons
        </h2>
        <span className="fi fi-ss-eye"></span>
        <span className="fi fi-ss-eye-crossed"></span>
        <span className="fi fi-ss-thumbs-up"></span>
        <span className="fi fi-ss-caret-up"></span>
        <span className="fi fi-ss-caret-down"></span>
        <span className="fi fi-brands-facebook"></span>
        <span className="fi fi-ss-pencil"></span>
        <span className="fi fi-ss-menu-dots-vertical"></span>
        <span className="fi fi-ss-trash"></span>
        <span className="fi fi-ss-plus"></span>
        <span className="fi fi-ss-cross"></span>
        <span className="fi fi-ss-running"></span>
        <span className="fi fi-ss-book-alt"></span>
        <span className="fi fi-ss-briefcase"></span>
        <span className="fi fi-ss-user"></span>
        <span className="fi fi-ss-clip"></span>
        <span className="fi fi-ss-at"></span>
        <span className="fi fi-ss-grin-beam"></span>
        <span className="fi fi-ss-form"></span>
      </div>

      <div>
        <h2>
          Dropdown List
        </h2>
      </div>

      <div>
        <h2>
          Progress Bar
        </h2>
      </div>

    </div>
  );
}