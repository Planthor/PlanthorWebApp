import React from "react";
import logo from "../../assets/LogoPlanthor.png";
const NavigationBar = () => {
  const listMenu = [{
    id: "m1",
    text: "Menu",
    path: "activity"
  }, {
    id: "m2",
    text: "Management",
    path: "profile"
  }, {
    id: "m3",
    text: "Discover",
    path: "discover"
  }];

  return (
    <div className="bg-whie shadow-lg h-12 w-full flex items-center fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between">
        <div>
          <a href="/">
            <img className="w-40" src={logo} />
          </a>
        </div>
        <nav className="flex items-center mr-96">
          <ul className="flex" >
            {listMenu.map(x =>
              <li className="pr-3" key={x.id}><a href={x.path}>{x.text}</a></li>
            )}
          </ul>
        </nav>
        <div className="flex justify-end items-center">
          <button type="button" className="primary-btn hover:bg-sky-500 mr-3">SignIn</button>
          <button type="button" className="primary-btn bg-sky-500 hover:bg-white ">SignUp</button>
        </div>
      </div>
    </div>);
};
export default NavigationBar;