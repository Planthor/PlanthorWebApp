import React from "react";

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
    <div className="bg-whie flex items-center shadow-lg h-12 w-full">
      <div className=""><a href="/">Logo</a></div>
      <nav>
        <ul className="flex" >
          {listMenu.map(x =>
            <li className="pr-3" key={x.id}><a href={x.path}>{x.text}</a></li>
          )}
        </ul>
      </nav>
      <button type="button">SignIn</button>
      <button type="button">SignUp</button>
    </div>);
};
export default NavigationBar;