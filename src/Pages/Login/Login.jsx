import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        setLoginError("");
        toast.success("User Login Successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-96 shadow-xl p-8">
        <h3 className="text-3xl text-center font-semibold">Login</h3>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                {...register("email", { required: true })}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <span className="text-red-800">Email is required*</span>
              )}
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "You must input 6 character or longer",
                  },
                })}
                type="password"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <span className="text-red-800">
                  {errors?.password?.message}
                </span>
              )}
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            <button className="btn btn-neutral mt-3">
              <input value="LOGIN" type="submit" />
            </button>
          </form>
          <div>
            {loginError && (
              <p className="text-red-800 font-semibold">{loginError}</p>
            )}
          </div>
          <label className="text-sm flex justify-center mt-3 text-center font-semibold">
            <p>
              New to Doctor&#8217;s Portal?
              <Link to="/register" className="ml-1 text-center text-[#19D3AE]">
                Create new account
              </Link>
            </p>
          </label>
          <div className="divider my-5">OR</div>
          <button
            onClick={handleGoogleLogIn}
            className="btn btn-outline w-full uppercase"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
