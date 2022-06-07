import logo from "../../assets/LogoPlanthor.png";
<<<<<<< HEAD
import {createBrowserHistory} from "history";
=======
>>>>>>> ec8e7f6362b090a475d6e2b316a472a6d44e553f
import {Link, useNavigate} from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
=======

>>>>>>> ec8e7f6362b090a475d6e2b316a472a6d44e553f
  const listMenu = [
    {
      id: "m1",
      text: "Menu",
      path: "activity"
    },
    {
      id: "m2",
      text: "Management",
      path: "profile"
    },
    {
      id: "m3",
      text: "Discover",
      path: "discover"
    },
    {
      id: "m4",
      text: "(demo)ComponentWidget",
      path: "component-widget"
    }
  ];

  const signInClickHandler = () => {
    navigate("./Login");
  };

  return (
    <div
      className="sticky bg-white shadow-lg h-12 w-full flex items-center top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/">
            <img className="w-40" src={logo} />
          </Link>
        </div>
        <nav className="flex items-center mr-96">
          <ul className="flex">
            {listMenu.map(x =>
              <li className="pr-3" key={x.id}>
                <Link to={x.path}>{x.text}</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="flex justify-end items-center">
          <button type="button" className="primary-btn hover:bg-sky-500 mr-3" onClick={signInClickHandler}>SignIn</button>
          <button type="button" className="primary-btn bg-sky-500 hover:bg-white ">SignUp</button>
        </div>
      </div>
    </div>);
};
export default NavigationBar;