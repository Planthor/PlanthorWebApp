import React from "react";
import SignInWithFacebook from "../../components/SignInWithFacebook/SignInWithFacebook";
import "./Login.scss";

const Login = () => {
  return (
        <div className="Login-background">
            <SignInWithFacebook />
        </div>
  );
};

export default Login;
