import LoginModal from "components/LoginModal/LoginModal";

export default function ComponentWidget() {
  return (
    <div>
      <h1>This is an ComponentWidget Page</h1>
      <div>
        <h2>
          Login Component
        </h2>
        <LoginModal></LoginModal>
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
        <input type="checkbox" id="demo-checked-box" name="demo-checked-box" defaultChecked></input>
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