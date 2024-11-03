import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login Successful");
        setIsLoggedIn(true); 
      })
      .catch((error) => {
        setErrorMessage("Please provide valid email & password!");
      });
  };

  // Redirect to the homepage if login is successful
  if (isLoggedIn) {
    return <Navigate to="/" />; 
  }

  return (
    <div>
      <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
        <div className="mb-5">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="font-bold text-lg">Please Login!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              <label className="label">
                <a
                  href="/forget-password"
                  className="label-text-alt link link-hover mt-2"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* show errors */}
            {errorMessage && (
              <p className="text-red text-xs italic">{errorMessage}</p>
            )}

            {/* submit btn */}
            <div className="form-control mt-4">
              <input
                type="submit"
                className="btn bg-green text-white w-full md:w-96 py-3"
                value="Login"
              />
            </div>
            <p className="text-center my-2">
              Don’t have an account?
              <Link to="/register" className="underline text-red ml-1">
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
